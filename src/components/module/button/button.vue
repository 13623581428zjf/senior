<template>
    <div class="ub ub-ac ub-pc button" :class="{'disabled':disabled}" @click="buttonClick"><span ref="buttonMask" :class="{'start':startBg,'move':startBg,'end':endBg ,'disabled':disabled,'is-border':border}"/>{{ title }}</div>
</template>

<script>
export default {
    name: 'LxButton',
    props: {
        border: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '提交问卷'
        },
        activeColor: {
            type: String,
            default: '#333333'
        },
        activeBgc: {
            type: String,
            default: '#ffffff'
        },
        fontSize: {
            type: String,
            default: '14px'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            startBg: false,
            endBg: false
        }
    },
    mounted() {
        var that = this
        this.$refs.buttonMask.addEventListener('touchstart', function(e) {
            that.startBg = true
            that.endBg = false
        }, false)
        this.$refs.buttonMask.addEventListener('touchmove', function(e) {
            that.startBg = true
            that.endBg = false
        }, false)
        this.$refs.buttonMask.addEventListener('touchend', function(e) {
            that.startBg = false
            that.endBg = true
        }, false)
    },
    methods: {
        buttonClick() {
            if (!this.disabled) {
                this.$emit('click')
            }
        }
    }
}
</script>

<style lang='scss' scoped>
  .ub {
    display: flex;
    position: relative;
  }
  /*ub-ac 让子元素垂直方向居中*/
  .ub-ac {
  align-items:center;
  }
  .ub-pc {
  justify-content:center;
  }
  .button {
    width: 100%;
    height: 90px;
    position: relative;
    overflow: hidden;
    box-sizing:border-box;
    border-radius:15px;
    &.disabled{
        background: #D7D7D7!important;
        color: rgba(102, 102, 102, 1);
        span{
             border: 1px solid;
             border-image: linear-gradient(31deg, #D7D7D7, #D7D7D7, #D7D7D7) 10 10;
        }
    }
  }

 .button>span{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    right:0;
    bottom:0;
    border-radius:15px;
    transition: all .3 linear;
    &.is-border{
        border: 1px solid;
        border-image: linear-gradient(31deg, #0096FF, #66FFFF, #0096FF) 10 10;
    }
  }
  .button>span.start{
  background-color: rgba(0,0,0,.2);
  }
  .button>span.move{
  background-color: rgba(0,0,0,.2);
  }
 .button>span.end{
    background-color: rgba(0,0,0,0);
  }
.button>span.disabled{
    background-color: rgba(0,0,0,0);
}
</style>
