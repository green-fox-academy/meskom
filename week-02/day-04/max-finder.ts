function maxFinder(a:number[]): number {
    if (a.length == 0) {
        return 0;
    }
    if a[0] > a[1] {
        return maxFinder(a.splice(1,1))
    }
    else maxFinder(a.splice(0,1)) 
}