import { Domino } from "./domino";

interface Comparable {
  compareTo(other: Domino): number {
    if  (this.values < orher.values){
    return -1}  
    if (this.values > this.other){
      return 1}
    else (this.values == this.other){}

    
    } 
  };
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */


