const memoryGame = {
    // easy - 3x4, medium - 4x5, hard - 6x6
    boardGame: [],
    icons: [
        {
        id:1,
        name:'Adobe After Effects',
        img: '<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg"/>'
        }, {
        id:2,
        name: 'AngularJs',
        img: '<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" />'
        }, {
        id: 3,
        name: 'Canva',
        img: '<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" />'
        },{
        id: 4,
        name: 'CSS',
        img: '<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />'
        },{
        id: 5,
        name: 'GitHub',
        img: '<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />'
        },{
        id: 6,
        name:'HTML',
        img: '<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />'
        },{
        id: 7,
        name: 'Typescript',
        img: '<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />'
        },{
        id: 8,
        name: 'Python',
        img: '<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" />'
        },{
        id: 9,
        name: 'WordPress',
        img: '<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg" />'
        },{
        id: 10,
        name:'MySql',
        img: '<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" />'
        },{
        id:11,
        name:'VsCode',
        img:'<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />'
        },{
        id:12,
        name:'React',
        img:'<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />'
        },{
        id:13,
        name:'Linux',
        img:'<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg" />'
        },{
        id:14,
        name:'Jquery',
        img:'<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />'
        },{
        id:15,
        name:'Facebook',
        img:'<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg" />'
        },{
        id:16,
        name:'DevIcon',
        img:'<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" />'
        },{
        id:17,
        name:'Bootsrap',
        img:'<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />'
        },{
        id:18,
        name:'Apple',
        img:'<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" />'
        },{
        id:19,
        name:'Android',
        img:'<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain-wordmark.svg" />'
        },{
        id:20,
        name:'Windows',
        img:'<img class="front-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" />'
        }
    ],
    idIcons:[],
    container_element: null,
    minId: 1, maxId: 20, 
    line: null, column: null, figures: null,
    iconsBackFace:[{
        id:1, 
        name:'JavaScript', 
        img:'<img class="back-face" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />'
    }],

    init: function(container){
        this.container_element = container
    },

    getRandomNumber: function(min, max) {
        return Math.floor(((max-min)*Math.random())+min)
    },

    createListOfId: function(param) {  
        for(let i = 0; i<param;){
            let a = this.getRandomNumber(this.minId, this.maxId)
            let k = 0

            this.idIcons.forEach(element => {
                if (element != a) { k++ }
            })

            if(k==this.idIcons.length) {
                this.idIcons.push(a)
                i++
            }
        }
    },

    dificulty: function(param){
        if(param=='easy') {
            this.line = 3
            this.column = 4
            this.figures = 6
            this.start(this.column, this.figures)
        } 

        if(param=='hard') {
            this.line = 6
            this.column = 6
            this.figures = 18
            this.start(this.column, this.figures)
        }
        if(param=='medium') {
            this.line = 4
            this.column = 5
            this.figures = 10
            this.start(this.column, this.figures)
        }

        document.getElementById('selection').style.display = "none"
        this.container_element.style.display = "grid"
        
    },

    start: function(columnGames, numberOfFigures){
        this.displayGrid(columnGames)
        this.createListOfId(numberOfFigures)
        this.create()
        this.writeBoard()
        this.createBoard()
        this.frontCardInvisible()
    },

    displayGrid: function(columnGames){
        const auto = 'auto '
        const columnGrid = auto.repeat(columnGames)
        this.container_element.setAttribute('style', `grid-template-columns: ${columnGrid}`) 
    },

    create: function() {
        for(let contLine = 0; contLine<this.line;) {
            let temp = []
            for(let contColumn = 0; contColumn<this.column;) {
                temp.push('')
                contColumn++
            }
            this.boardGame.push(temp)
            contLine++
        }
    },

    duplicate: function(param){
        const duplicateArray = []
        for (let contDuplicate = 0;contDuplicate<param;contDuplicate++){
            this.idIcons.forEach(element => duplicateArray.push(element))
        }
        return duplicateArray
    },
    
    writeBoard: function() {
        const IdAddMatriz = this.duplicate(2)
        let numberFigures = this.figures *2
        
        for(let lineCont = 0; lineCont<this.line; lineCont++ ){
            for(let columnCont = 0; columnCont<this.column;columnCont++ ){
                    const randomIndex = this.getRandomNumber(0,numberFigures)
                    this.boardGame[lineCont][columnCont] = IdAddMatriz[randomIndex]
                    numberFigures--
                    IdAddMatriz.splice(randomIndex,1)    
            }
        } 
    },

    createBoard: function() {
        let content = ''
        
        for(let lineCont = 0; lineCont<this.line; lineCont++ ){
            for(let columnCont = 0; columnCont<this.column; columnCont++ ){ 
               content += `<div class="memory-card" id=${this.boardGame[lineCont][columnCont]}> ${this.icons[this.boardGame[lineCont][columnCont]].img} ${this.iconsBackFace[0].img}</div>`
            } 
        }
        this.container_element.innerHTML = content
        
    },

    addRotateCard: function() {
        const cardWithoutEvent = document.querySelectorAll('.memory-card')
        console.log(cardWithoutEvent)
    },

    frontCardInvisible: function() {
        const frontCards = document.querySelectorAll('.front-face')
        frontCards.forEach(card => card.style.display = "none")
        this.addRotateCard()
    }

    
    

    

        
}