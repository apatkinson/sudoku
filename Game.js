function Game() {
    this.data = {};
}

Game.prototype.updateData = function(data) {
    this.data = data;
    console.log('update');
};

Game.prototype.checkBoxTotals = function() {
    for (var i = 1; i <= 9; i++) {
        console.log(i);
    }
};
