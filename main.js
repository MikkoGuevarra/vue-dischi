var app =  new Vue ({
    el: '#root',
    data: {
        discs: [],
        genre: [],
        selectedValue: '',
        selectedDate: ''
    },
    methods: {
        setDate(event) {
            this.selectedDate = event.target.value;
            console.log(this.selectedDate);
            if (this.selectedDate == 'oldest') {
                this.discs.sort((a, b) => parseFloat(a.year) - parseFloat(b.year));
                console.log(this.discs);
            } else if (this.selectedDate == 'newest')  {
                console.log('newwww');
                this.discs.sort((a, b) => parseFloat(b.year) - parseFloat(a.year));
                console.log(this.discs);
            } else if (this.selectedDate == '') {
                console.log('normal');
            }
        }
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(result =>{
            this.discs = result.data.response;

            //ciclo l'array di discs per ottenre il genre
            //dopo aver creato un'array per il genre
            //faccio push se il genre non è ancora presente nell'array
            this.discs.forEach((item, i) => {
                if (!this.genre.includes(item.genre)) {
                    this.genre.push(item.genre)
                }

            });

        });
    }
});
