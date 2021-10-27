
/*
You can also try to create other classes. For example a TV class:

1) Create a TV class with properties like brand, channel and volume. Specify brand in 
a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
2) Add methods to increase and decrease volume. Volume can't never be below 0 or 
above 100.
3) Add a method to set the channel. Let's say the TV has only 50 channels so if you 
try to set channel 60 the TV will stay at the current channel.
4) Add a method to reset TV so it goes back to channel 1 and volume 50. 
(Hint: consider using it from the constructor).
5) It's useful to write a status, that returns info about the TV status like: 
"Panasonic at channel 8, volume 75".
*/

class Tv {
    constructor (brand) {
        this.brand = brand;
        this.volume = 50;
        this.channel = 1;
        this.mirror_volume = this.volume;
        this.mirror_channel = this.channel;
    }
    
    reset(){
        this.volume = this.mirror_volume;
        this.channel = this.mirror_channel;
    
    }
    
    increase_volume(amount) {
        this.volume += amount;
        (this.volume > 100) ? this.volume = 100 : this.volume = this.volume;
    }
    
    decrease_volume(amount) {
        this.volume -= amount;
        (this.volume < 0) ? this.volume = 0 : this.volume = this.volume;
    }
    
    set_channel(number) {
        (number > 50 || number <=0) ? this.channel = this.channel : this.channel = number;
    }
    
    status() {
        return this.brand + " " + " at channel " + this.channel + " and volume " +  this.volume
    }
}


