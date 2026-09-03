<template>
  <div 
    class="voice-message" 
    :class="{ 'is-playing': isPlaying, 'is-listened': isListened }" 
    ref="messageElement"
    @click="handleContainerClick"
    :style="{ cursor: 'pointer' }"
  >
    <!-- 播放/暂停按钮 -->
    <button class="play-btn" @click.stop="togglePlay" :aria-label="isPlaying ? '暂停语音' : '播放语音'">
      <span class="play-icon" v-if="!isPlaying">▶</span>
      <span class="pause-icon" v-else>⏸</span>
    </button>
    
    <!-- 语音波形（所有柱子动态跳动） -->
    <div class="voice-waveform">
      <div 
        v-for="(bar, index) in waveformBars" 
        :key="index" 
        class="wave-bar"
        :class="{ 'active': isPlaying }"
        :style="{ 
          height: isPlaying ? bar.playingHeight + 'px' : bar.height + 'px',
          animationDelay: isPlaying ? `${index * 0.06}s` : '0s'
        }"
      ></div>
    </div>
    
    <!-- 语音时长 -->
    <div class="voice-duration">
      <span class="duration-text">{{ formattedDuration }}</span>
      <span class="duration-unit">"</span>
    </div>
    
    <!-- 语音状态指示器（小红点） -->
    <div class="voice-status" v-if="!isListened">
      <span class="status-dot"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VoiceMessage',
  props: {
    duration: {
      type: Number,
      default: 0
    },
    isListened: {
      type: Boolean,
      default: false
    },
    audioUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isPlaying: false,
      isVisible: false,
      currentTime: 0,
      waveformBars: [],
      currentBar: 0,
      barInterval: null,
      playTimer: null,
      audio: null,
      isLoading: false,
      error: null
    }
  },
  computed: {
    formattedDuration() {
      if (this.duration <= 0) return '0'
      return Math.round(this.duration)
    }
  },
  methods: {
    handleContainerClick(event) {
      if (event.target.closest('.play-btn')) {
        return
      }
      this.togglePlay()
    },
    
    togglePlay() {
      if (this.isPlaying) {
        this.pauseAudio()
      } else {
        this.playAudio()
      }
    },
    
    playAudio() {
      if (!this.audioUrl) {
        this.simulatePlay()
        return
      }
      
      this.isLoading = true
      this.error = null
      
      if (!this.audio) {
        this.audio = new Audio(this.audioUrl)
        
        this.audio.addEventListener('loadedmetadata', () => {
          this.isLoading = false
          if (!this.duration && this.audio.duration) {
            this.$emit('duration-update', Math.round(this.audio.duration))
          }
        })
        
        this.audio.addEventListener('canplay', () => {
          this.isLoading = false
        })
        
        this.audio.addEventListener('error', (e) => {
          this.isLoading = false
          this.error = '音频加载失败'
          console.error('音频播放错误:', e)
          this.simulatePlay()
        })
        
        this.audio.addEventListener('ended', () => {
          this.pauseAudio()
          if (!this.isListened) {
            this.$emit('listened')
          }
        })
        
        this.audio.addEventListener('timeupdate', () => {
          if (this.audio) {
            this.currentTime = this.audio.currentTime
          }
        })
      }
      
      this.audio.play().then(() => {
        this.isPlaying = true
        this.isLoading = false
        this.startWaveformAnimation()
        
        this.playTimer = setInterval(() => {
          if (this.audio && !this.audio.paused) {
            this.currentTime = this.audio.currentTime
          }
        }, 100)
      }).catch((error) => {
        this.isLoading = false
        this.error = '播放失败: ' + error.message
        console.error('播放失败:', error)
        this.simulatePlay()
      })
    },
    
    simulatePlay() {
      this.isPlaying = true
      this.startWaveformAnimation()
      
      this.currentTime = 0
      this.playTimer = setInterval(() => {
        if (this.currentTime < this.duration) {
          this.currentTime += 0.1
        } else {
          this.pauseAudio()
          if (!this.isListened) {
            this.$emit('listened')
          }
        }
      }, 100)
      
      console.log('模拟播放音频，时长:', this.duration, '秒')
    },
    
    pauseAudio() {
      this.isPlaying = false
      this.stopWaveformAnimation()
      
      if (this.audio && !this.audio.paused) {
        this.audio.pause()
      }
      
      if (this.playTimer) {
        clearInterval(this.playTimer)
        this.playTimer = null
      }
    },
    
    startWaveformAnimation() {
      // 确保波形存在
      if (this.waveformBars.length === 0) {
        this.generateWaveform()
      }
      
      // 播放时不断更新柱子高度，实现动态跳动
      this.barInterval = setInterval(() => {
        this.updateWaveformBars()
      }, 100)
    },
    
    stopWaveformAnimation() {
      if (this.barInterval) {
        clearInterval(this.barInterval)
        this.barInterval = null
      }
      // 重置为初始状态
      this.waveformBars.forEach(bar => {
        bar.playingHeight = 6 + Math.random() * 16
      })
    },
    
    // 更新波形条高度（随机跳动）
    updateWaveformBars() {
      this.waveformBars.forEach(bar => {
        // 在基础高度附近随机变化，模拟真实波形
        const baseHeight = 10
        const variation = Math.random() * 14
        bar.playingHeight = Math.max(4, Math.min(24, baseHeight + variation))
      })
    },
    
    generateWaveform() {
      const barCount = 14
      this.waveformBars = []
      
      for (let i = 0; i < barCount; i++) {
        // 中间高两边低的初始波形
        const center = (i - barCount / 2) / (barCount / 2)
        const baseHeight = 8 + (1 - Math.abs(center)) * 10
        const randomVariation = Math.random() * 4
        
        this.waveformBars.push({
          height: Math.max(4, Math.min(20, baseHeight + randomVariation)),
          playingHeight: Math.max(4, Math.min(24, baseHeight + randomVariation + 4))
        })
      }
    }
  },
  mounted() {
    this.generateWaveform()
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    if (this.$refs.messageElement) {
      observer.observe(this.$refs.messageElement)
    }
  },
  
  beforeUnmount() {
    this.pauseAudio()
    
    if (this.audio) {
      this.audio.pause()
      this.audio.src = ''
      this.audio = null
    }
    
    if (this.barInterval) {
      clearInterval(this.barInterval)
      this.barInterval = null
    }
    if (this.playTimer) {
      clearInterval(this.playTimer)
      this.playTimer = null
    }
  }
}
</script>

<style scoped>
.voice-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: var(--vp-c-bg-soft, #f6f8fa);
  border-radius: 8px;
  user-select: none;
  transition: all 0.2s ease;
  min-width: 120px;
  max-width: 200px;
  cursor: pointer;
}

.voice-message:hover {
  background-color: var(--vp-c-bg-mute, #eaeef2);
  border-color: var(--vp-c-brand, #409eff);
}

.voice-message.is-playing {
  background-color: var(--vp-c-bg-alt, #f0f2f5);
  border-color: var(--vp-c-brand, #409eff);
}

/* 播放按钮 - 使用主题变量 */
.play-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--vp-c-brand, hsla(211, 19%, 46%, 0));
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 11px;
  transition: all 0.2s ease;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(64, 160, 255, 0);
}

.play-btn:hover {
  background-color: var(--vp-c-brand-dark, #3d7abb);
  transform: scale(1.08);
  box-shadow: 0 2px 8px rgba(64, 158, 255, 0.4);
}

.play-btn:active {
  transform: scale(0.92);
}

/* 已收听状态 - 按钮变灰 */
.voice-message.is-listened .play-btn {
  background-color: var(--vp-c-text-3, #8b949e);
  box-shadow: none;
}

.voice-message.is-listened .play-btn:hover {
  background-color: var(--vp-c-text-2, #6e7681);
}

/* 波形区域 */
.voice-waveform {
  display: flex;
  align-items: center;
  gap: 3px;
  height: 28px;
  flex: 1;
  padding: 0 2px;
}

.wave-bar {
  width: 3px;
  border-radius: 2px;
  background-color: var(--vp-c-text-3, #8b949e);
  transition: height 0.15s ease, background-color 0.3s ease;
  transform-origin: bottom;
  will-change: height;
}

/* 播放时所有柱子跳动 */
.wave-bar.active {
  background-color: var(--vp-c-brand, #71a2d3);
  animation: waveJump 0.3s ease-in-out infinite alternate;
}

@keyframes waveJump {
  0% { transform: scaleY(0.6); }
  100% { transform: scaleY(1); }
}

/* 已收听状态波形变灰 */
.voice-message.is-listened .wave-bar {
  background-color: var(--vp-c-text-3, #8b949e);
}

.voice-message.is-listened .wave-bar.active {
  background-color: var(--vp-c-text-3, #8b949e);
}

/* 时长 */
.voice-duration {
  display: flex;
  align-items: baseline;
  font-size: 13px;
  color: var(--vp-c-text-2, #57606a);
  flex-shrink: 0;
  margin-left: 4px;
  font-variant-numeric: tabular-nums;
}

.duration-text {
  font-weight: 600;
}

.duration-unit {
  font-size: 10px;
  margin-left: 1px;
  opacity: 0.6;
}

/* 已收听状态时长变灰 */
.voice-message.is-listened .voice-duration {
  color: var(--vp-c-text-3, #8b949e);
}




@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .voice-message {
    padding: 6px 10px;
    min-width: 100px;
    max-width: 160px;
    gap: 6px;
  }
  
  .play-btn {
    width: 24px;
    height: 24px;
    font-size: 9px;
  }
  
  .voice-waveform {
    height: 22px;
    gap: 2px;
  }
  
  .wave-bar {
    width: 2.5px;
  }
  
  .voice-duration {
    font-size: 11px;
  }
  
  .status-dot {
    width: 6px;
    height: 6px;
  }
}

/* 暗色模式适配 */
@media (prefers-color-scheme: dark) {
  .voice-message {
    background-color: var(--vp-c-bg-soft, #2d333b);
    border-color: var(--vp-c-border, #3d444d);
  }
  
  .voice-message:hover {
    background-color: var(--vp-c-bg-mute, #3d444d);
  }
  
  .voice-message.is-playing {
    background-color: var(--vp-c-bg-alt, #22272e);
  }
}

/* VuePress 暗色类 */
.dark .voice-message {
  background-color: var(--vp-c-bg-soft, #2d333b);
  border-color: var(--vp-c-border, #3d444d);
}

.dark .voice-message:hover {
  background-color: var(--vp-c-bg-mute, #3d444d);
}

.dark .voice-message.is-playing {
  background-color: var(--vp-c-bg-alt, #22272e);
}
</style>