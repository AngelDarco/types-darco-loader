class Observer{
    private observer!: IntersectionObserver;
private container : HTMLElement;
private options : IntersectionObserverInit;
    constructor(container:HTMLElement, options?:IntersectionObserverInit) {
        this.container = container;
        this.options = options ? options : {
            root: null,
            rootMargin: "100px",
            threshold: 1
        };
    }
    getObserver(resolve: (isIntersecting: boolean) => void) {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) 
               return resolve(entry.isIntersecting);
            else return resolve(entry.isIntersecting);
            });
        }, this.options);
        this.observer.observe(this.container);
    }
}
export default Observer;