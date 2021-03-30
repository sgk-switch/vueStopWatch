let app = new Vue({
    el:'#app',
    data(){
        return{
            now: '00:00.000',
            startTime:'',
            timeoutId:'',
            elapsedTime : 0,
            isClickStart: false,
            isClickStop: true,
            isClickReset: true,

        }
    },

    methods:{
        countStart(){
            this.startTime = Date.now();
            this.countUp();

            this.isClickStart = true;
            this.isClickStop = false;
            this.isClickReset = true;

        },
        countUp(){           
            let d = new Date(Date.now() - this.startTime + this.elapsedTime);
            let m = String(d.getMinutes()).padStart(2,0);
            let s = String(d.getSeconds()).padStart(2,0);
            let ms = String(d.getMilliseconds()).padStart(3,0);

            let nowTime = `${m}:${s}.${ms}`
            this.now = nowTime;

            this.timeoutId = setTimeout(()=> {
                this.countUp();
            },10)
        },
        countStop(){
            clearTimeout(this.timeoutId);
            this.elapsedTime += Date.now() - this.startTime;

            this.isClickStart = false;
            this.isClickStop = true;
            this.isClickReset = false;
        },
        resetTimer(){
            this.now = '00:00.000';
            this.elapsedTime = 0;

            this.isClickStart = false;
            this.isClickStop = true;
            this.isClickReset = true;
        }

    }
})