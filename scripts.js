class Component {
    constructor(id){
        this.id = id
        this.el = document.getElementById(id)
        
        this.content = document.getElementsByTagName('template')[0].innerHTML
        this.el.innerHTML = ''
    }
    evaluate(data) {
        this.template =  eval('`'+this.content+'`')
        this.el.innerHTML += this.template
    }
    withData(data){
        this.template =  eval('`'+this.content+'`')
        this.el.innerHTML += this.template
    }
    clear(){
        this.el.innerHTML = ''
    }
    
}