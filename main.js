var app =  new Vue ({
    el: '#root',
    data: {
        discs: [],
        genre: []
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(result =>{
            this.discs = result.data.response;
            console.log(this.discs);

            //ciclo l'array di discs per ottenre il genre
            //dopo aver creato un'array per il genre
            //faccio push se il genre non è ancora presente nell'array
            this.discs.forEach((item, i) => {
                console.log(item.genre);
                if (!this.genre.includes(item.genre)) {
                    this.genre.push(item.genre)
                }

            });

        });
    }
});
