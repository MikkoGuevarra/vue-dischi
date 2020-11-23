var app =  new Vue ({
    el: '#root',
    data: {
        discs: [],
        genre: [],
        selectedValue: '',
        selectedDate: 'oldest'
    },
    methods: {
        setDate(event) {
            console.log(event.target.value);
            if (event.target.value == this.selectedDate) {
                this.discs.sort((a, b) => parseFloat(a.year) - parseFloat(b.year));
                console.log(this.discs);
            } else  {
                console.log('newwww');
                this.discs.sort((b, a) => parseFloat(a.year) - parseFloat(b.year));
                console.log(this.discs);
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
