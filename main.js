var app =  new Vue ({
    el: '#root',
    data: {
        discs: [],
        genre: [],
        selectedValue: false
    },
    methods : {
        onChange(event) {
            console.log(event.target.value);
            this.discs.forEach((item, i) => {
                if (item.genre == event.target.value) {
                    selectedValue = true;
                    console.log(selectedValue);
                }

            });
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
