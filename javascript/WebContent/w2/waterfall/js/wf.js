/**
 * @author yu
 */
var Column = function(order){
	this.order = order;
	this.maxHeight = 0;
	this.columnWidth = 230;
	this.left = this.columnWidth * order;
	this.lastItem = null;
	this.positioned = false;
	this.setReferItem = function(item){
		this.lastItem = item;
	}

	this.getHeight = function(){
		if(this.lastItem){
			this.maxHeight = this.lastItem.getBottom();
		}
		return this.maxHeight;
	}

	this.getLeft = function(){
		return this.left;
	}
};