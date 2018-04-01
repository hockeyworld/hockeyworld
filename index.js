(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Belarus = function() {
	this.initialize(img.Belarus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Canada = function() {
	this.initialize(img.Canada);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Czech = function() {
	this.initialize(img.Czech);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Denmark = function() {
	this.initialize(img.Denmark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Finland = function() {
	this.initialize(img.Finland);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.France = function() {
	this.initialize(img.France);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Germany = function() {
	this.initialize(img.Germany);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.h3 = function() {
	this.initialize(img.h3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,251);


(lib.Latvia = function() {
	this.initialize(img.Latvia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Norway = function() {
	this.initialize(img.Norway);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Russia = function() {
	this.initialize(img.Russia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.SKorea = function() {
	this.initialize(img.SKorea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Slovakia = function() {
	this.initialize(img.Slovakia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Slovenia = function() {
	this.initialize(img.Slovenia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Sweden = function() {
	this.initialize(img.Sweden);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Switzerland = function() {
	this.initialize(img.Switzerland);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.USA = function() {
	this.initialize(img.USA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.fon_goal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,51,0.749)").s().p("ApwCvIAAldIThAAIAAFdg");
	this.shape.setTransform(62.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fon_goal, new cjs.Rectangle(0,0,125,35), null);


(lib.fon_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E02A25","#E07022"],[0,1],-11.5,0,11.4,0).s().p("AhQBRQgighAAgwQAAguAigiQAigiAuAAQAwAAAhAiQAiAiAAAuQAAAwgiAhQghAigwAAQguAAgigig");
	this.shape.setTransform(10,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD7F32").s().p("AhfBgQgognAAg5QAAg3AogoQAogoA3AAQA4AAAoAoQAoAoAAA3QAAA5goAnQgoAog4AAQg3AAgogogAhRhRQgiAhAAAwQAAAuAiAiQAiAhAvAAQAvAAAhghQAigiAAguQAAgwgighQghgigvAAQgvAAgiAig");
	this.shape_1.setTransform(10.1,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000044").ss(1,1,1).p("AANAFQAnguAbg0QgigHgCgJIg1BNAhfhMQAYgIAWgKIAnA+IAXAlIAkA5IAFAIIAsAUIBmitQgdgBgdgCQgJgBgJgBQgbgDgSgCAAFBUQgLADgNAEQgOAEgLADQgwANAAgBQgXgWgZgfQgxg9gKgvQAUgDAcgHQAEAAAFgCQAYgFAXgIQAlBHA/BZgAA2BGQgYAHgZAHACOhWQgqBUgzBAAiOg/QAGAqAkAxQAWAgAiAj");
	this.shape_2.setTransform(9,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhjAbQgkgwgGgqQAYgGAWgHQAmBGA/BaIgxALQgigjgWghgAAOAFQAnguAbg0IAsAFIASACQgqBUgyA/g");
	this.shape_3.setTransform(8.9,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033FF").s().p("AhcBiQgXgVgZgfQgxg+gKgvQAUgCAcgHIAJgCQAHApAjAxQAXAgAhAjIAxgLIgYAHIgZAHQgtANgDAAIAAgBgAA2A6IgFgIQAzg/AqhVQAdADAdAAIhmCtg");
	this.shape_4.setTransform(9,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4708").s().p("AhXg/QAZgIAVgKIAoA+IA0hNQADAJAiAHQgbA0gnAuIgXglIAXAlIAkA5IAEAIIgwAOQg/hagmhGg");
	this.shape_5.setTransform(8.1,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fon_3, new cjs.Rectangle(-12,-13.5,42,45.2), null);


(lib.fon_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#474747","#C3C3C3","#C9C9C9"],[0,0.678,1],-17,0,17.1,0).s().p("Ah4B5QgygzABhGQgBhFAygzQAzgyBFAAQBGAAAzAyQAyAzgBBFQABBGgyAzQgzAxhGAAQhFAAgzgxg");
	this.shape.setTransform(10.3,20.1,0.679,0.679);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhfBgQgogoAAg4QAAg3AogoQAogoA3AAQA4AAAoAoQAoAoAAA3QAAA4goAoQgoAog4AAQg3AAgogog");
	this.shape_1.setTransform(10.1,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000044").ss(1,1,1).p("AhfhMQAYgIAWgKIAnA+IAXAlIAkA5IAFAIIAsAUIBmitQgdgBgdgCQgJgBgJgBQgbgDgSgCQgigHgCgJIg1BNAA2BGQgYAHgZAHQgLADgNADQgOAFgLADQgwAMAAAAQgXgWgZgfQgxg9gKgvQAUgDAcgHQAEgBAFgBQAYgGAXgHQAlBGA/BaAANAFQAnguAbg0ACOhWQgqBUgzBAAiOg/QAGAqAkAxQAWAgAiAj");
	this.shape_2.setTransform(9,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhjAcQgkgxgGgqQAYgGAWgHQAmBGA/BaIgxAKQgigigWgggAAOAEQAngtAbg1IAsAGIASABQgqBVgyBAg");
	this.shape_3.setTransform(8.9,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033FF").s().p("AhcBiQgXgWgZgeQgxg+gKgvQAUgCAcgHIAJgCQAHAqAjAwQAXAgAhAjIAxgLIgYAHIgZAHIgwANIAAgBgAA2A6IgFgIQAzg/AqhVIA6AEIhmCsg");
	this.shape_4.setTransform(9,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4708").s().p("AhXg/QAZgIAVgKIAoA+IA0hNQADAJAiAHQgbA0gnAuIAkA5IAEAIIgwAOQg/hbgmhFgAAWASIgXglg");
	this.shape_5.setTransform(8.1,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fon_2, new cjs.Rectangle(-12,-11.8,42,45.3), null);


(lib.fon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// медаль
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E2D91C","#E0DC32","#D2EFA4"],[0,0.529,1],-12.9,0,12.9,0).s().p("AhaBeQgmgnAAg3QAAg2AmgnQAQgQAUgKQAXgMAcAAIADAAQA1gBAmAnQAmAnAAA2QAAA3gmAnQgmAmg1AAQg0AAgmgmg");
	this.shape.setTransform(12,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEA49").s().p("AhqBqQgsgsAAg+QAAg+AsgsQATgSAXgMQAWgLAbgCIAAAAIAPgBQAQAAAOADQArAHAiAiQAsAsAAA+QAAA+gsAsQgsAtg/AAQg9AAgtgtgAg3h4QgUAJgQARQgmAnAAA2QAAA3AmAnQAmAmA1AAQA0AAAmgmQAngngBg3QABg2gngnQgmgng0AAIgEAAQgcABgXAMg");
	this.shape_1.setTransform(12.1,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000044").ss(1,1,1).p("AhghMQAZgIAVgLIAnA/IAXAlIAkA5IAFAHQgYAIgZAGQgLAEgMADQgOAEgMADQgwANAAgBQgWgVgZgfQgxg+gKgvQAUgCAcgHQAEgBAEgBQAHAqAjAxQAXAfAhAjABOheQgigGgCgJIg1BNAA1BFIAtAUIBmisQgegBgdgCQgJgBgJgBQgbgDgSgDAAMAFQAoguAag1AhghMQAmBGA+BZACNhWQgqBUgzBAAiPg/QAZgGAWgH");
	this.shape_2.setTransform(10.6,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhjAcQgjgxgHgqQAYgGAWgHQAnBGA+BaIgxAKQgigigWgggAAOAFQAnguAbg1IAtAHIARABQgqBUgyBAg");
	this.shape_3.setTransform(10.5,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF4708").s().p("AhXg/QAZgIAWgLIAnA/IA0hMQADAIAiAGQgbA1gnAuIAkA5IAFAHIgxAPQg+hbgnhFgAAWASIgXglg");
	this.shape_4.setTransform(9.7,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033FF").s().p("AhcBiQgXgVgYgfQgyg+gKgvQAUgCAcgHIAIgCQAHAqAjAxQAXAfAhAjIAygLIgYAHIgaAHQgsAMgDAAIAAAAgAA1A6IgEgHQAyhAAqhUQAeACAdABIhnCsg");
	this.shape_5.setTransform(10.6,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fon_1, new cjs.Rectangle(-10.4,-11.7,42,48.7), null);


(lib.strelka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAnVIAACrIgiAAIAiirIAjCrIgjAAIACMA");
	this.shape.setTransform(-0.2,-47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.strelka, new cjs.Rectangle(-4.6,-94.9,9,96), null);


(lib.Day = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("День №1", "bold 30px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 356;
	this.text.parent = this;
	this.text.setTransform(180,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Day, new cjs.Rectangle(0,0,360,45.6), null);


(lib.bt_Start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("strik");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой 1
	this.text = new cjs.Text("Старт", "bold 18px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(81,9.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C0000","#FF1533"],[0,1],5,37.4,5,-34.1).s().p("AuDDIIAAmPIcHAAIAAGPg");
	this.shape.setTransform(79,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C0000","#FF1533"],[0,1],5,37.4,5,-34.1).s().p("AuDDJQhyiPBykAQNdiJOqCJQByC1hyDaQmvBCnCAAQnBAAnVhCg");
	this.shape_1.setTransform(79,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Az6GkIAAtHMAn1AAAIAANHg");
	this.shape_2.setTransform(75.5,20.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,0,180,40);


(lib.bt_Next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("strik");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой 1
	this.text = new cjs.Text("Далее", "bold 16px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 152;
	this.text.parent = this;
	this.text.setTransform(80,9);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C0000","#FF1533"],[0,1],5,37.4,5,-34.1).s().p("AuDDIIAAmPIcHAAIAAGPg");
	this.shape.setTransform(79,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C0000","#FF1533"],[0,1],5.3,37.1,5.3,-34.4).s().p("AuADFQhhivBhjgQNqhZOdBZQBVDfhVCwQm1AynCAAQnBAAnPgyg");
	this.shape_1.setTransform(78.7,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AxLFvIAArdMAiXAAAIAALdg");
	this.shape_2.setTransform(76.7,20.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,0,180,40);


(lib.bt_Nazad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("strik");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой 1
	this.text = new cjs.Text("Назад", "bold 16px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(81,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C0000","#FF1533"],[0,1],5,37.4,5,-34.1).s().p("AuDDIIAAmPIcHAAIAAGPg");
	this.shape.setTransform(79,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C0000","#FF1533"],[0,1],5.2,36.6,5.2,-34.9).s().p("AuBDBQh3iwB3jfQOQhvN3BvQBvDfhvCwQnIBGnBAAQnCAAm8hGg");
	this.shape_1.setTransform(78.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AxcFDIAAqFMAi5AAAIAAKFg");
	this.shape_2.setTransform(81,20.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,0,180,40);


(lib.bt_2_champ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("period");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой 1
	this.text = new cjs.Text("Начать чемпионат", "bold 16px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 152;
	this.text.parent = this;
	this.text.setTransform(80,9);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C0000","#FF1533"],[0,1],5,37.4,5,-34.1).s().p("AuDDIIAAmPIcHAAIAAGPg");
	this.shape.setTransform(79,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C0000","#FF1533"],[0,1],4.7,37.3,4.7,-34.2).s().p("AuGDIQh4igB4jvQOqiKNdCKQCFDHiFDIQm4BFnCAAQnBAAnMhFg");
	this.shape_1.setTransform(79.3,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AzSHbIAAu1MAmlAAAIAAO1g");
	this.shape_2.setTransform(79.5,17.6);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,0,180,40);


(lib.bt_0_hist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("strik");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой 1
	this.text = new cjs.Text("Изменение рейтингов", "bold 16px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 167;
	this.text.parent = this;
	this.text.setTransform(80.5,8.4,1,1.073);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C0000","#FF1533"],[0,1],5,37.4,5,-34.1).s().p("AuDDIIAAmPIcHAAIAAGPg");
	this.shape.setTransform(80,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("At9DOQhji7BjjUQOXiMNwCMQBLDUhLC7QnLA6nBAAQnCAAm5g6g");
	this.shape_1.setTransform(79.4,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AyRGkIAAtHMAkjAAAIAANHg");
	this.shape_2.setTransform(80,24.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,180,40);


(lib.group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text("-", "19px 'Arial'");
	this.text.lineHeight = 23;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(496.7,1.9,0.952,0.951);

	this.tf_goals2 = new cjs.Text("", "19px 'Arial'");
	this.tf_goals2.name = "tf_goals2";
	this.tf_goals2.lineHeight = 23;
	this.tf_goals2.lineWidth = 32;
	this.tf_goals2.parent = this;
	this.tf_goals2.setTransform(508.2,1.9,0.952,0.951);

	this.tf_points = new cjs.Text("", "19px 'Arial'");
	this.tf_points.name = "tf_points";
	this.tf_points.textAlign = "center";
	this.tf_points.lineHeight = 23;
	this.tf_points.lineWidth = 53;
	this.tf_points.parent = this;
	this.tf_points.setTransform(595.1,2.2,0.952,0.951);

	this.tf_goals1 = new cjs.Text("", "19px 'Arial'");
	this.tf_goals1.name = "tf_goals1";
	this.tf_goals1.textAlign = "right";
	this.tf_goals1.lineHeight = 23;
	this.tf_goals1.lineWidth = 32;
	this.tf_goals1.parent = this;
	this.tf_goals1.setTransform(491.1,2.2,0.952,0.951);

	this.tf_por = new cjs.Text("", "19px 'Arial'");
	this.tf_por.name = "tf_por";
	this.tf_por.textAlign = "center";
	this.tf_por.lineHeight = 23;
	this.tf_por.lineWidth = 53;
	this.tf_por.parent = this;
	this.tf_por.setTransform(394.1,2.2,0.952,0.951);

	this.tf_pob = new cjs.Text("", "19px 'Arial'");
	this.tf_pob.name = "tf_pob";
	this.tf_pob.textAlign = "center";
	this.tf_pob.lineHeight = 23;
	this.tf_pob.lineWidth = 53;
	this.tf_pob.parent = this;
	this.tf_pob.setTransform(304,2.2,0.952,0.951);

	this.tf_games = new cjs.Text("", "19px 'Arial'");
	this.tf_games.name = "tf_games";
	this.tf_games.textAlign = "center";
	this.tf_games.lineHeight = 23;
	this.tf_games.lineWidth = 53;
	this.tf_games.parent = this;
	this.tf_games.setTransform(225.9,2.3,0.952,0.951);

	this.tf_name = new cjs.Text("", "19px 'Arial'");
	this.tf_name.name = "tf_name";
	this.tf_name.lineHeight = 23;
	this.tf_name.lineWidth = 144;
	this.tf_name.parent = this;
	this.tf_name.setTransform(29.6,2.4,0.975,0.972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tf_name},{t:this.tf_games},{t:this.tf_pob},{t:this.tf_por},{t:this.tf_goals1},{t:this.tf_points},{t:this.tf_goals2},{t:this.text}]}).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000033").ss(0.1,1,1).p("EgxIgB8MBiRAAAIAAD5MhiRAAAg");
	this.shape.setTransform(314.5,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2FFFF").s().p("EgxIAB9IAAj5MBiRAAAIAAD5g");
	this.shape_1.setTransform(314.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.group, new cjs.Rectangle(-1,-1,631,27), null);


(lib.stolbec_2_oborona = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.ob16 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob16.name = "ob16";
	this.ob16.textAlign = "center";
	this.ob16.lineHeight = 23;
	this.ob16.lineWidth = 54;
	this.ob16.parent = this;
	this.ob16.setTransform(33.1,515.6);

	this.ob10 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob10.name = "ob10";
	this.ob10.textAlign = "center";
	this.ob10.lineHeight = 23;
	this.ob10.lineWidth = 54;
	this.ob10.parent = this;
	this.ob10.setTransform(33.1,325.8);

	this.ob11 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob11.name = "ob11";
	this.ob11.textAlign = "center";
	this.ob11.lineHeight = 23;
	this.ob11.lineWidth = 54;
	this.ob11.parent = this;
	this.ob11.setTransform(33.1,358.2);

	this.ob12 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob12.name = "ob12";
	this.ob12.textAlign = "center";
	this.ob12.lineHeight = 23;
	this.ob12.lineWidth = 54;
	this.ob12.parent = this;
	this.ob12.setTransform(33.1,389.2);

	this.ob13 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob13.name = "ob13";
	this.ob13.textAlign = "center";
	this.ob13.lineHeight = 23;
	this.ob13.lineWidth = 54;
	this.ob13.parent = this;
	this.ob13.setTransform(33.1,421.1);

	this.ob14 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob14.name = "ob14";
	this.ob14.textAlign = "center";
	this.ob14.lineHeight = 23;
	this.ob14.lineWidth = 54;
	this.ob14.parent = this;
	this.ob14.setTransform(33.1,452.8);

	this.ob15 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob15.name = "ob15";
	this.ob15.textAlign = "center";
	this.ob15.lineHeight = 23;
	this.ob15.lineWidth = 54;
	this.ob15.parent = this;
	this.ob15.setTransform(33.1,485.1);

	this.ob8 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob8.name = "ob8";
	this.ob8.textAlign = "center";
	this.ob8.lineHeight = 23;
	this.ob8.lineWidth = 54;
	this.ob8.parent = this;
	this.ob8.setTransform(33.1,263.9);

	this.ob9 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob9.name = "ob9";
	this.ob9.textAlign = "center";
	this.ob9.lineHeight = 23;
	this.ob9.lineWidth = 54;
	this.ob9.parent = this;
	this.ob9.setTransform(33.1,295.5);

	this.ob7 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob7.name = "ob7";
	this.ob7.textAlign = "center";
	this.ob7.lineHeight = 23;
	this.ob7.lineWidth = 54;
	this.ob7.parent = this;
	this.ob7.setTransform(33.1,231.8);

	this.ob6 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob6.name = "ob6";
	this.ob6.textAlign = "center";
	this.ob6.lineHeight = 23;
	this.ob6.lineWidth = 54;
	this.ob6.parent = this;
	this.ob6.setTransform(33.1,200.4);

	this.ob5 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob5.name = "ob5";
	this.ob5.textAlign = "center";
	this.ob5.lineHeight = 23;
	this.ob5.lineWidth = 54;
	this.ob5.parent = this;
	this.ob5.setTransform(33.1,168.6);

	this.ob4 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob4.name = "ob4";
	this.ob4.textAlign = "center";
	this.ob4.lineHeight = 23;
	this.ob4.lineWidth = 54;
	this.ob4.parent = this;
	this.ob4.setTransform(33.1,136.5);

	this.ob3 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob3.name = "ob3";
	this.ob3.textAlign = "center";
	this.ob3.lineHeight = 23;
	this.ob3.lineWidth = 54;
	this.ob3.parent = this;
	this.ob3.setTransform(33.1,105.9);

	this.ob2 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob2.name = "ob2";
	this.ob2.textAlign = "center";
	this.ob2.lineHeight = 23;
	this.ob2.lineWidth = 54;
	this.ob2.parent = this;
	this.ob2.setTransform(33.1,74.3);

	this.ob1 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.ob1.name = "ob1";
	this.ob1.textAlign = "center";
	this.ob1.lineHeight = 23;
	this.ob1.lineWidth = 54;
	this.ob1.parent = this;
	this.ob1.setTransform(33.1,44.4);

	this.text = new cjs.Text("Обор.", "16px 'LuzSans-Book'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 54;
	this.text.parent = this;
	this.text.setTransform(33.3,9.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C4C9CE").ss(0.1,1,1).p("EgE/gj2IAAmVIKJAAIAAGVIAAEbIAAFAIAAE3EgFJgj2IAKAAIKJAAAk//XIAAkfAk//XIKJgEAk/1kIAAk3IKJAAAk/rqIAAlAIKJAAIAAFAIAAE7IAAE6IAAFCIAAEzAk/1kIKJAAIAAE6Ak/wqIAAk6Ak/rqIKJAAAk/6bIAAk8AlJDNIAKAAIAAlCIAAk6IKJAAAk/h1IKJAAAk/DNIKJAAAk/R5IAAk9IKJAAIAAE9IAAE8IAAE6IAAFCIAAFAIAAEbIqJAAIAAkbIKJAAAk/IAIKJAAIAAE8Ak/M8IAAk8IAAkzAk/R5IKJAAAk/mvIAAk7EgE/AgxIAAlCIAAk6IKJAAAk/bvIKJAAEgE/AgxIKJAAEgE/AlxIAAlAAk/W1IAAk8");
	this.shape.setTransform(33,270);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F9FA").s().p("EgFEAqMIAAkbIKJAAIAAEbgEAFFAlxIqJAAIAAlBIAAlBIKJAAIqJAAIAAk5IKJAAIqJAAIAAk9IKJAAIqJAAIAAk+IKJAAIAAE+IAAE9IAAE5IAAFBIqJAAIKJAAIAAFBgEgFEAlxgAlEM7IAAk7IKJAAIAAE7gAlEIAIAAkzIKJAAIAAEzgAlEDNIAAlCIKJAAIAAFCgAlEh1IAAk6IKJAAIAAE6gAlEmvIAAk7IKJAAIAAE7gAlErqIAAlAIKJAAIAAFAgAlErqgAFFwqIqJAAIAAk6IAAk3IAAk8IKJgEIqJAEIAAkfIKJAAIqJAAIAAmVIKJAAIAAGVIAAEbIAAFAIqJAAIKJAAIAAE3IqJAAIKJAAIAAE6gAlEwqg");
	this.shape_1.setTransform(33.6,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.ob1},{t:this.ob2},{t:this.ob3},{t:this.ob4},{t:this.ob5},{t:this.ob6},{t:this.ob7},{t:this.ob9},{t:this.ob8},{t:this.ob15},{t:this.ob14},{t:this.ob13},{t:this.ob12},{t:this.ob11},{t:this.ob10},{t:this.ob16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stolbec_2_oborona, new cjs.Rectangle(-1,-1,68.1,542), null);


(lib.stolbec_2_mr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.at16 = new cjs.Text("2800", "16px 'LuzSans-Book'");
	this.at16.name = "at16";
	this.at16.textAlign = "center";
	this.at16.lineHeight = 23;
	this.at16.lineWidth = 54;
	this.at16.parent = this;
	this.at16.setTransform(33.1,515.6);

	this.at10 = new cjs.Text("3220", "16px 'LuzSans-Book'");
	this.at10.name = "at10";
	this.at10.textAlign = "center";
	this.at10.lineHeight = 23;
	this.at10.lineWidth = 54;
	this.at10.parent = this;
	this.at10.setTransform(33.1,325.8);

	this.at11 = new cjs.Text("3200", "16px 'LuzSans-Book'");
	this.at11.name = "at11";
	this.at11.textAlign = "center";
	this.at11.lineHeight = 23;
	this.at11.lineWidth = 54;
	this.at11.parent = this;
	this.at11.setTransform(33.1,358.2);

	this.at12 = new cjs.Text("3145", "16px 'LuzSans-Book'");
	this.at12.name = "at12";
	this.at12.textAlign = "center";
	this.at12.lineHeight = 23;
	this.at12.lineWidth = 54;
	this.at12.parent = this;
	this.at12.setTransform(33.1,389.2);

	this.at13 = new cjs.Text("3130", "16px 'LuzSans-Book'");
	this.at13.name = "at13";
	this.at13.textAlign = "center";
	this.at13.lineHeight = 23;
	this.at13.lineWidth = 54;
	this.at13.parent = this;
	this.at13.setTransform(33.1,421.1);

	this.at14 = new cjs.Text("3100", "16px 'LuzSans-Book'");
	this.at14.name = "at14";
	this.at14.textAlign = "center";
	this.at14.lineHeight = 23;
	this.at14.lineWidth = 54;
	this.at14.parent = this;
	this.at14.setTransform(33.1,452.8);

	this.at15 = new cjs.Text("3010", "16px 'LuzSans-Book'");
	this.at15.name = "at15";
	this.at15.textAlign = "center";
	this.at15.lineHeight = 23;
	this.at15.lineWidth = 54;
	this.at15.parent = this;
	this.at15.setTransform(33.1,485.1);

	this.at8 = new cjs.Text("3405", "16px 'LuzSans-Book'");
	this.at8.name = "at8";
	this.at8.textAlign = "center";
	this.at8.lineHeight = 23;
	this.at8.lineWidth = 54;
	this.at8.parent = this;
	this.at8.setTransform(33.1,263.9);

	this.at9 = new cjs.Text("3310", "16px 'LuzSans-Book'");
	this.at9.name = "at9";
	this.at9.textAlign = "center";
	this.at9.lineHeight = 23;
	this.at9.lineWidth = 54;
	this.at9.parent = this;
	this.at9.setTransform(33.1,295.5);

	this.at7 = new cjs.Text("3610", "16px 'LuzSans-Book'");
	this.at7.name = "at7";
	this.at7.textAlign = "center";
	this.at7.lineHeight = 23;
	this.at7.lineWidth = 54;
	this.at7.parent = this;
	this.at7.setTransform(33.1,231.8);

	this.at6 = new cjs.Text("3725", "16px 'LuzSans-Book'");
	this.at6.name = "at6";
	this.at6.textAlign = "center";
	this.at6.lineHeight = 23;
	this.at6.lineWidth = 54;
	this.at6.parent = this;
	this.at6.setTransform(33.1,200.4);

	this.at5 = new cjs.Text("3740", "16px 'LuzSans-Book'");
	this.at5.name = "at5";
	this.at5.textAlign = "center";
	this.at5.lineHeight = 23;
	this.at5.lineWidth = 54;
	this.at5.parent = this;
	this.at5.setTransform(33.1,168.6);

	this.at4 = new cjs.Text("3820", "16px 'LuzSans-Book'");
	this.at4.name = "at4";
	this.at4.textAlign = "center";
	this.at4.lineHeight = 23;
	this.at4.lineWidth = 54;
	this.at4.parent = this;
	this.at4.setTransform(33.1,136.5);

	this.at3 = new cjs.Text("3850", "16px 'LuzSans-Book'");
	this.at3.name = "at3";
	this.at3.textAlign = "center";
	this.at3.lineHeight = 23;
	this.at3.lineWidth = 54;
	this.at3.parent = this;
	this.at3.setTransform(33.1,105.9);

	this.at2 = new cjs.Text("4040", "16px 'LuzSans-Book'");
	this.at2.name = "at2";
	this.at2.textAlign = "center";
	this.at2.lineHeight = 23;
	this.at2.lineWidth = 54;
	this.at2.parent = this;
	this.at2.setTransform(33.1,74.3);

	this.at1 = new cjs.Text("4045", "16px 'LuzSans-Book'");
	this.at1.name = "at1";
	this.at1.textAlign = "center";
	this.at1.lineHeight = 23;
	this.at1.lineWidth = 54;
	this.at1.parent = this;
	this.at1.setTransform(33.1,44.4);

	this.text = new cjs.Text("Рейтинг", "16px 'LuzSans-Book'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 62;
	this.text.parent = this;
	this.text.setTransform(33.1,9.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C4C9CE").ss(0.1,1,1).p("EgE/gj2IAAmVIKJAAIAAGVIAAEbIAAFAIAAE3IAAE6IAAFAIAAE7IAAE6IAAFCIAAEzIAAE8IAAE9IAAE8IAAE6IAAFCIAAFAIAAEbIqJAAIAAkbIKJAAEgFJgj2IAKAAIKJAAAk//XIKJgEAk//XIAAkfAk/1kIAAk3IKJAAAk/rqIAAlAIKJAAAk/1kIKJAAAk/rqIKJAAAk/wqIAAk6Ak/6bIAAk8Ak/DNIAAlCIKJAAAlJDNIAKAAIKJAAAk/mvIKJAAAk/h1IAAk6IAAk7Ak/R5IAAk9IKJAAAk/IAIKJAAAk/R5IKJAAAk/M8IAAk8IAAkzEgE/AgxIAAlCIKJAAAk/W1IKJAAEgE/AgxIKJAAAk/bvIAAk6IAAk8EgE/AlxIAAlA");
	this.shape.setTransform(33,270);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F9FA").s().p("EgFEAqMIAAkbIKJAAIAAEbgEgFEAlxIAAlBIKJAAIAAFBgEgFEAgwIAAlBIKJAAIAAFBgAlEbvIAAk5IAAk9IKJAAIAAE9IqJAAIKJAAIAAE5gAlER5IAAk+IKJAAIAAE+gAlEM7IAAk7IAAkzIAAlCIKJAAIAAFCIqJAAIKJAAIAAEzIqJAAIKJAAIAAE7gAlEh1IAAk6IKJAAIAAE6gAlEmvIAAk7IAAlAIKJAAIAAFAIqJAAIKJAAIAAE7gAFFwqIqJAAIAAk6IKJAAIAAE6gAlE1kIAAk3IAAk8IKJgEIAAFAIqJAAIKJAAIAAE3gEgFEgj2IKJAAIqJAAIAAmVIKJAAIAAGVIAAEbIqJAEgAFF/bg");
	this.shape_1.setTransform(33.6,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.at1},{t:this.at2},{t:this.at3},{t:this.at4},{t:this.at5},{t:this.at6},{t:this.at7},{t:this.at9},{t:this.at8},{t:this.at15},{t:this.at14},{t:this.at13},{t:this.at12},{t:this.at11},{t:this.at10},{t:this.at16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stolbec_2_mr, new cjs.Rectangle(-1,-1,68.1,542), null);


(lib.stolbec_2_ataka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.at16 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at16.name = "at16";
	this.at16.textAlign = "center";
	this.at16.lineHeight = 23;
	this.at16.lineWidth = 54;
	this.at16.parent = this;
	this.at16.setTransform(33.1,515.6);

	this.at10 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at10.name = "at10";
	this.at10.textAlign = "center";
	this.at10.lineHeight = 23;
	this.at10.lineWidth = 54;
	this.at10.parent = this;
	this.at10.setTransform(33.1,325.8);

	this.at11 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at11.name = "at11";
	this.at11.textAlign = "center";
	this.at11.lineHeight = 23;
	this.at11.lineWidth = 54;
	this.at11.parent = this;
	this.at11.setTransform(33.1,358.2);

	this.at12 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at12.name = "at12";
	this.at12.textAlign = "center";
	this.at12.lineHeight = 23;
	this.at12.lineWidth = 54;
	this.at12.parent = this;
	this.at12.setTransform(33.1,389.2);

	this.at13 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at13.name = "at13";
	this.at13.textAlign = "center";
	this.at13.lineHeight = 23;
	this.at13.lineWidth = 54;
	this.at13.parent = this;
	this.at13.setTransform(33.1,421.1);

	this.at14 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at14.name = "at14";
	this.at14.textAlign = "center";
	this.at14.lineHeight = 23;
	this.at14.lineWidth = 54;
	this.at14.parent = this;
	this.at14.setTransform(33.1,452.8);

	this.at15 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at15.name = "at15";
	this.at15.textAlign = "center";
	this.at15.lineHeight = 23;
	this.at15.lineWidth = 54;
	this.at15.parent = this;
	this.at15.setTransform(33.1,485.1);

	this.at8 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at8.name = "at8";
	this.at8.textAlign = "center";
	this.at8.lineHeight = 23;
	this.at8.lineWidth = 54;
	this.at8.parent = this;
	this.at8.setTransform(33.1,263.9);

	this.at9 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at9.name = "at9";
	this.at9.textAlign = "center";
	this.at9.lineHeight = 23;
	this.at9.lineWidth = 54;
	this.at9.parent = this;
	this.at9.setTransform(33.1,295.5);

	this.at7 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at7.name = "at7";
	this.at7.textAlign = "center";
	this.at7.lineHeight = 23;
	this.at7.lineWidth = 54;
	this.at7.parent = this;
	this.at7.setTransform(33.1,231.8);

	this.at6 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at6.name = "at6";
	this.at6.textAlign = "center";
	this.at6.lineHeight = 23;
	this.at6.lineWidth = 54;
	this.at6.parent = this;
	this.at6.setTransform(33.1,200.4);

	this.at5 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at5.name = "at5";
	this.at5.textAlign = "center";
	this.at5.lineHeight = 23;
	this.at5.lineWidth = 54;
	this.at5.parent = this;
	this.at5.setTransform(33.1,168.6);

	this.at4 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at4.name = "at4";
	this.at4.textAlign = "center";
	this.at4.lineHeight = 23;
	this.at4.lineWidth = 54;
	this.at4.parent = this;
	this.at4.setTransform(33.1,136.5);

	this.at3 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at3.name = "at3";
	this.at3.textAlign = "center";
	this.at3.lineHeight = 23;
	this.at3.lineWidth = 54;
	this.at3.parent = this;
	this.at3.setTransform(33.1,105.9);

	this.at2 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at2.name = "at2";
	this.at2.textAlign = "center";
	this.at2.lineHeight = 23;
	this.at2.lineWidth = 54;
	this.at2.parent = this;
	this.at2.setTransform(33.1,74.3);

	this.at1 = new cjs.Text("", "16px 'LuzSans-Book'");
	this.at1.name = "at1";
	this.at1.textAlign = "center";
	this.at1.lineHeight = 23;
	this.at1.lineWidth = 54;
	this.at1.parent = this;
	this.at1.setTransform(33.1,44.4);

	this.text = new cjs.Text("Атака", "16px 'LuzSans-Book'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 54;
	this.text.parent = this;
	this.text.setTransform(33.1,9.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C4C9CE").ss(0.1,1,1).p("EgE/gj2IAAmVIKJAAIAAGVIAAEbIAAFAIAAE3IAAE6IAAFAIAAE7IAAE6IAAFCIAAEzIAAE8IAAE9IAAE8IAAE6IAAFCIAAFAIAAEbIqJAAIAAkbIKJAAEgFJgj2IAKAAIKJAAAk//XIKJgEAk//XIAAkfAk/1kIAAk3IKJAAAk/rqIAAlAIKJAAAk/1kIKJAAAk/rqIKJAAAk/wqIAAk6Ak/6bIAAk8Ak/DNIAAlCIKJAAAlJDNIAKAAIKJAAAk/mvIKJAAAk/h1IAAk6IAAk7Ak/R5IAAk9IKJAAAk/IAIKJAAAk/R5IKJAAAk/M8IAAk8IAAkzEgE/AgxIAAlCIKJAAAk/W1IKJAAEgE/AgxIKJAAAk/bvIAAk6IAAk8EgE/AlxIAAlA");
	this.shape.setTransform(33,270);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F9FA").s().p("EgFEAqMIAAkbIKJAAIAAEbgEgFEAlxIAAlBIKJAAIAAFBgEgFEAgwIAAlBIKJAAIAAFBgAlEbvIAAk5IAAk9IKJAAIAAE9IqJAAIKJAAIAAE5gAlER5IAAk+IKJAAIAAE+gAlEM7IAAk7IAAkzIAAlCIKJAAIAAFCIqJAAIKJAAIAAEzIqJAAIKJAAIAAE7gAlEh1IAAk6IKJAAIAAE6gAlEmvIAAk7IAAlAIKJAAIAAFAIqJAAIKJAAIAAE7gAFFwqIqJAAIAAk6IKJAAIAAE6gAlE1kIAAk3IAAk8IKJgEIAAFAIqJAAIKJAAIAAE3gEgFEgj2IKJAAIqJAAIAAmVIKJAAIAAGVIAAEbIqJAEgAFF/bg");
	this.shape_1.setTransform(33.6,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.at1},{t:this.at2},{t:this.at3},{t:this.at4},{t:this.at5},{t:this.at6},{t:this.at7},{t:this.at9},{t:this.at8},{t:this.at15},{t:this.at14},{t:this.at13},{t:this.at12},{t:this.at11},{t:this.at10},{t:this.at16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stolbec_2_ataka, new cjs.Rectangle(-1,-1,68.1,542), null);


(lib.fon_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("Aj+CbQhkAAAAhkIAAhtQAAhkBkAAIH9AAQBkAAAABkIAABtQAABkhkAAg");
	this.shape.setTransform(35.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fon_red, new cjs.Rectangle(0,0,71,31), null);


(lib.fon_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("Aj+CbQhkAAAAhkIAAhtQAAhkBkAAIH9AAQBkAAAABkIAABtQAABkhkAAg");
	this.shape.setTransform(35.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fon_blue, new cjs.Rectangle(0,0,71,31), null);


(lib.gr_playoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.team2 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.team2.name = "team2";
	this.team2.textAlign = "right";
	this.team2.lineHeight = 29;
	this.team2.lineWidth = 121;
	this.team2.parent = this;
	this.team2.setTransform(135,40.6);

	this.goals2 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.goals2.name = "goals2";
	this.goals2.lineHeight = 29;
	this.goals2.lineWidth = 36;
	this.goals2.parent = this;
	this.goals2.setTransform(158,42.5);

	this.goals1 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.goals1.name = "goals1";
	this.goals1.lineHeight = 29;
	this.goals1.lineWidth = 36;
	this.goals1.parent = this;
	this.goals1.setTransform(158,2.3);

	this.team1 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.team1.name = "team1";
	this.team1.textAlign = "right";
	this.team1.lineHeight = 29;
	this.team1.lineWidth = 121;
	this.team1.parent = this;
	this.team1.setTransform(135,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.team1},{t:this.goals1},{t:this.goals2},{t:this.team2}]}).wait(1));

	// фон1
	this.fon_goal2_1 = new lib.fon_1();
	this.fon_goal2_1.parent = this;
	this.fon_goal2_1.setTransform(232.1,58,0.899,0.899,0,0,0,22.3,22.3);
	this.fon_goal2_1.visible = false;

	this.fon_goal1_1 = new lib.fon_1();
	this.fon_goal1_1.parent = this;
	this.fon_goal1_1.setTransform(232.1,14.8,0.899,0.899,0,0,0,22.3,22.3);
	this.fon_goal1_1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fon_goal1_1},{t:this.fon_goal2_1}]}).wait(1));

	// фон2
	this.fon_goal2_2 = new lib.fon_2();
	this.fon_goal2_2.parent = this;
	this.fon_goal2_2.setTransform(232,58,1,1,0,0,0,20,20);
	this.fon_goal2_2.visible = false;

	this.fon_goal1_2 = new lib.fon_2();
	this.fon_goal1_2.parent = this;
	this.fon_goal1_2.setTransform(232,17.3,1,1,0,0,0,20,20);
	this.fon_goal1_2.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fon_goal1_2},{t:this.fon_goal2_2}]}).wait(1));

	// фон3
	this.fon_goal2_3 = new lib.fon_3();
	this.fon_goal2_3.parent = this;
	this.fon_goal2_3.setTransform(232,59.9,1,1,0,0,0,20,20);
	this.fon_goal2_3.visible = false;

	this.fon_goal1_3 = new lib.fon_3();
	this.fon_goal1_3.parent = this;
	this.fon_goal1_3.setTransform(232,18.6,1,1,0,0,0,20,20);
	this.fon_goal1_3.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fon_goal1_3},{t:this.fon_goal2_3}]}).wait(1));

	// фон
	this.fon_goal2 = new lib.fon_goal();
	this.fon_goal2.parent = this;
	this.fon_goal2.setTransform(71.1,57.5,1.2,1,0,0,0,62.6,17.5);
	this.fon_goal2.visible = false;

	this.fon_goal1 = new lib.fon_goal();
	this.fon_goal1.parent = this;
	this.fon_goal1.setTransform(71.1,17.8,1.2,1,0,0,0,62.6,17.5);
	this.fon_goal1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fon_goal1},{t:this.fon_goal2}]}).wait(1));

	// граница
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000033").ss(0.1,1,1).p("AAAAAIAAAC");
	this.shape.setTransform(204.5,80.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5588CC").s().p("AuzGpIgKAAIhwAAIAAtRMAhcAAAIAANRQvzgDvvADg");
	this.shape_1.setTransform(97.4,37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_playoff, new cjs.Rectangle(-9.6,-15.4,251.1,96.9), null);


(lib.gr_gameday = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.team2 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.team2.name = "team2";
	this.team2.lineHeight = 29;
	this.team2.lineWidth = 127;
	this.team2.parent = this;
	this.team2.setTransform(200.8,2);

	this.goals2 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.goals2.name = "goals2";
	this.goals2.lineHeight = 29;
	this.goals2.lineWidth = 24;
	this.goals2.parent = this;
	this.goals2.setTransform(167.6,2);

	this.goals1 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.goals1.name = "goals1";
	this.goals1.textAlign = "right";
	this.goals1.lineHeight = 29;
	this.goals1.lineWidth = 24;
	this.goals1.parent = this;
	this.goals1.setTransform(155.1,2);

	this.team1 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.team1.name = "team1";
	this.team1.textAlign = "right";
	this.team1.lineHeight = 29;
	this.team1.lineWidth = 130;
	this.team1.parent = this;
	this.team1.setTransform(121,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AgKA7QgEgEAAgHQAAgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAEgGAAQgGAAgEgEgAgKglQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape.setTransform(161.9,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.team1},{t:this.goals1},{t:this.goals2},{t:this.team2}]}).wait(1));

	// фон
	this.fon_goal2 = new lib.fon_goal();
	this.fon_goal2.parent = this;
	this.fon_goal2.setTransform(268.2,18.6,1.2,1,0,0,0,62.6,17.5);
	this.fon_goal2.visible = false;

	this.fon_goal1 = new lib.fon_goal();
	this.fon_goal1.parent = this;
	this.fon_goal1.setTransform(53.8,17.2,1.2,1,0,0,0,62.5,17.5);
	this.fon_goal1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fon_goal1},{t:this.fon_goal2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_gameday, new cjs.Rectangle(-21.2,-0.3,364.3,37.4), null);


(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// стрелка
	this.strelka = new lib.strelka();
	this.strelka.parent = this;
	this.strelka.setTransform(-0.3,-0.3,1,0.999,0.1,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.strelka).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(1,1,1).p("AM0LJIs0ncAszLJIMzncAACrIIgCO1");
	this.shape.setTransform(0.1,-23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// фон
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000044").s().p("AncDsQABmJEVkWQEWkWGKAAIACAAIgCO2IszHbIgEACQh/jVAAkJg");
	this.shape_1.setTransform(-47.3,-23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333366").s().p("AgBABIADgBIgDABIAAAAg");
	this.shape_2.setTransform(-82.1,47.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AnaDtIACu2IABAAIADAAQGFACETEUQEXEXAAGIQgBEJh+DVg");
	this.shape_3.setTransform(47.6,-23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AqfDEQhahag9hnIAEgCIMznbIM2HcQg9BnhbBbQkWEXmJAAQmJAAkWkXg");
	this.shape_4.setTransform(0,47.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(-95,-95.9,190,190.9), null);


(lib.speed50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("50x", "24px 'Lucida Fax'", "#FFFFFF");
	this.text.lineHeight = 29;
	this.text.lineWidth = 47;
	this.text.parent = this;
	this.text.setTransform(10.8,1.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(1,1,1).p("Aj+iaIH9AAQBkAAAABkIAABtQAABkhkAAIn9AAQhkAAAAhkIAAhtQAAhkBkAAg");
	this.shape.setTransform(35.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Aj+CbQhkAAAAhkIAAhtQAAhkBkAAIH9AAQBkAAAABkIAABtQAABkhkAAg");
	this.shape_1.setTransform(35.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// fon_blue
	this.fon_blue = new lib.fon_blue();
	this.fon_blue.parent = this;
	this.fon_blue.setTransform(35.5,15.5,1,1,0,0,0,35.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.fon_blue).wait(4));

	// fon_red
	this.instance = new lib.fon_red();
	this.instance.parent = this;
	this.instance.setTransform(35.2,15.2,1,1,0,0,0,35.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("ApXDkIAAnHISvAAIAAHHg");
	this.shape_2.setTransform(33.1,15.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73,33);


(lib.speed20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("20x", "24px 'Lucida Fax'", "#FFFFFF");
	this.text.lineHeight = 29;
	this.text.lineWidth = 47;
	this.text.parent = this;
	this.text.setTransform(10.8,1.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(1,1,1).p("Aj+iaIH9AAQBkAAAABkIAABtQAABkhkAAIn9AAQhkAAAAhkIAAhtQAAhkBkAAg");
	this.shape.setTransform(35.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Aj+CbQhkAAAAhkIAAhtQAAhkBkAAIH9AAQBkAAAABkIAABtQAABkhkAAg");
	this.shape_1.setTransform(35.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// fon_blue
	this.fon_blue = new lib.fon_blue();
	this.fon_blue.parent = this;
	this.fon_blue.setTransform(35.5,15.5,1,1,0,0,0,35.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.fon_blue).wait(4));

	// fon_red
	this.instance = new lib.fon_red();
	this.instance.parent = this;
	this.instance.setTransform(35.2,15.2,1,1,0,0,0,35.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("ApXDkIAAnHISvAAIAAHHg");
	this.shape_2.setTransform(33.1,15.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73,33);


(lib.speed5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("5x", "24px 'Lucida Fax'", "#FFFFFF");
	this.text.lineHeight = 29;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(16.8,1.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(1,1,1).p("Aj+iaIH9AAQBkAAAABkIAABtQAABkhkAAIn9AAQhkAAAAhkIAAhtQAAhkBkAAg");
	this.shape.setTransform(35.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Aj+CbQhkAAAAhkIAAhtQAAhkBkAAIH9AAQBkAAAABkIAABtQAABkhkAAg");
	this.shape_1.setTransform(35.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// fon_blue
	this.fon_blue = new lib.fon_blue();
	this.fon_blue.parent = this;
	this.fon_blue.setTransform(35.5,15.5,1,1,0,0,0,35.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.fon_blue).wait(4));

	// fon_red
	this.instance = new lib.fon_red();
	this.instance.parent = this;
	this.instance.setTransform(35.2,15.2,1,1,0,0,0,35.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("ApXDkIAAnHISvAAIAAHHg");
	this.shape_2.setTransform(33.1,15.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73,33);


(lib.speed1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("1x", "24px 'Lucida Fax'", "#FFFFFF");
	this.text.lineHeight = 29;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(16.8,1.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(1,1,1).p("Aj+iaIH9AAQBkAAAABkIAABtQAABkhkAAIn9AAQhkAAAAhkIAAhtQAAhkBkAAg");
	this.shape.setTransform(35.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Aj+CbQhkAAAAhkIAAhtQAAhkBkAAIH9AAQBkAAAABkIAABtQAABkhkAAg");
	this.shape_1.setTransform(35.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// fon_blue
	this.fon_blue = new lib.fon_blue();
	this.fon_blue.parent = this;
	this.fon_blue.setTransform(35.5,15.5,1,1,0,0,0,35.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.fon_blue).wait(4));

	// fon_red
	this.instance = new lib.fon_red();
	this.instance.parent = this;
	this.instance.setTransform(35.2,15.2,1,1,0,0,0,35.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("ApXDkIAAnHISvAAIAAHHg");
	this.shape_2.setTransform(33.1,15.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73,33);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hist:1,turtab:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		if (!repeat) {
		this.bt_0_start.addEventListener("click", click_bt_0_start.bind(this));
		this.bt_0_hist.addEventListener("click", click_bt_0_hist.bind(this));
		}
		
		function click_bt_0_start()
		{
			//тестируем
			this.gotoAndStop(2);
			//this.gotoAndStop(5);
			this.bt_0_start.removeEventListener("click", click_bt_0_start.bind(this));
		
		}
		
		function click_bt_0_hist()
		{
			this.gotoAndStop("hist");
			this.bt_0_hist.removeEventListener("click", click_bt_0_hist.bind(this));
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		
		//кнопка назад
		this.bt_1_nazad.addEventListener("click", click_bt_back_1_0.bind(this));
		
		function click_bt_back_1_0()
		{
			this.gotoAndStop(0);
			this.bt_1_nazad.removeEventListener("click", click_bt_back_1_0.bind(this));
			
		}
	}
	this.frame_2 = function() {
		this.stop();
		
		//кнопка начать чемпионат (переход к кадру 3)
		if (!repeat) {
			this.bt_2_champ.addEventListener("click", click_bt_goto3.bind(this));
		}
		
		function click_bt_goto3() {
			this.gotoAndStop(3);
			this.bt_2_champ.removeEventListener("click", click_bt_goto3.bind(this));
		}
		
		//кнопка назад
		this.bt_2_nazad.addEventListener("click", click_bt_back_2_0.bind(this));
		function click_bt_back_2_0()
		{
			this.gotoAndStop(0);
			this.bt_2_nazad.removeEventListener("click", click_bt_back_2_0.bind(this));
		}
		
		
		//массив показателей аттак
		var at_i = [this.st_att.at1, this.st_att.at2, this.st_att.at3, this.st_att.at4, 
		this.st_att.at5, this.st_att.at6, this.st_att.at7, this.st_att.at8, 
		this.st_att.at9, this.st_att.at10, this.st_att.at11, this.st_att.at12, 
		this.st_att.at13, this.st_att.at14, this.st_att.at15, this.st_att.at16]; 
		
		//массив показателей обороны
		var ob_i = [this.st_ob.ob1, this.st_ob.ob2, this.st_ob.ob3, this.st_ob.ob4, 
		this.st_ob.ob5, this.st_ob.ob6, this.st_ob.ob7, this.st_ob.ob8, 
		this.st_ob.ob9, this.st_ob.ob10, this.st_ob.ob11, this.st_ob.ob12, 
		this.st_ob.ob13, this.st_ob.ob14, this.st_ob.ob15, this.st_ob.ob16]; 
		
		for (team in teams){
			at_i[teams[team].pos-1].text = teams[team].att;
			ob_i[teams[team].pos-1].text = teams[team].def;
		}
	}
	this.frame_3 = function() {
		this.stop();
		
		//кнопка далее, условие исключает повторную регистрацию
		if (day == 0 && !repeat) this.bt_3_next.addEventListener("click", click_bt_goto4.bind(this));
		
		function click_bt_goto4() {
			//отладка поменять 1 на 7
			if (day < 7) {
				this.gotoAndStop(5);
			} else {
				this.gotoAndStop(6);
			}
		}
		//
		
		//кнопка в начало
		/*
		if (day == 0 && !repeat) this.bt_3_nazad.addEventListener("click", click_bt_back_0_0.bind(this));
		
		function click_bt_back_0_0()
		{
			this.gotoAndStop(0);
		}
		*/
		
		//Первый день. Начало
		if (day == 0) {
			//позиция 1
			if (Math.round(Math.random())) {
				teams.Canada.group = 'A';
				teams.Russia.group = 'B';
			} else {
				teams.Canada.group = 'B';
				teams.Russia.group = 'A';
			}
		
			//позиция 2
			if (Math.round(Math.random())) {
				teams.Sweden.group = 'A';
				teams.Finland.group = 'B';
			} else {
				teams.Sweden.group = 'B';
				teams.Finland.group = 'A';
			}
		
			//позиция 3
			if (Math.round(Math.random())) {
				teams.Usa.group = 'A';
				teams.Czech.group = 'B';
			} else {
				teams.Usa.group = 'B';
				teams.Czech.group = 'A';
			}
		
			//позиция 4
			if (Math.round(Math.random())) {
				teams.Switzerland.group = 'A';
				teams.Germany.group = 'B';
			} else {
				teams.Switzerland.group = 'B';
				teams.Germany.group = 'A';
			}
		
			//позиция 5
			if (Math.round(Math.random())) {
				teams.Norway.group = 'A';
				teams.Slovakia.group = 'B';
			} else {
				teams.Norway.group = 'B';
				teams.Slovakia.group = 'A';
			}
		
			//позиция 6
			if (Math.round(Math.random())) {
				teams.Belarus.group = 'A';
				teams.France.group = 'B';
			} else {
				teams.Belarus.group = 'B';
				teams.France.group = 'A';
			}
		
			//позиция 7
			if (Math.round(Math.random())) {
				teams.Latvia.group = 'A';
				teams.Denmark.group = 'B';
			} else {
				teams.Latvia.group = 'B';
				teams.Denmark.group = 'A';
			}
		
			//позиция 8
			if (Math.round(Math.random())) {
				teams.Slovenia.group = 'A';
				teams.Korea.group = 'B';
			} else {
				teams.Slovenia.group = 'B';
				teams.Korea.group = 'A';
			}
		
			//формируем ТТ - содержит строки
			tA = [this.grA1, this.grA2, this.grA3, this.grA4, this.grA5, this.grA6, 
			this.grA7, this.grA8];
		
			tB = [this.grB1, this.grB2, this.grB3, this.grB4, this.grB5, this.grB6, 
			this.grB7, this.grB8];
		
			//обнуляем ве показатели
			for (var i = 0; i < 8; i++) {
				tA[i].tf_games.text = 0;
				tB[i].tf_games.text = 0;
				
				tA[i].tf_pob.text = 0;
				tB[i].tf_pob.text = 0;
		
				tA[i].tf_por.text = 0;
				tB[i].tf_por.text = 0;
				
				tA[i].tf_goals1.text = 0;
				tB[i].tf_goals1.text = 0;
				
				tA[i].tf_goals2.text = 0;
				tB[i].tf_goals2.text = 0;
				
				tA[i].tf_points.text = 0;
				tB[i].tf_points.text = 0;	
			}
		
			/*
			вставляем сами команды согласно группы и позиции в группе, и запоминаем
			размещение в tA1
			*/
		
			for (team in teams){
				if (teams[team].group == 'A') {
					tA[teams[team].grpos-1].tf_name.text = teams[team].name;
					tA1[teams[team].grpos-1] = teams[team];
					//проба
					tA[teams[team].grpos-1].obj = teams[team];
				} else {
					tB[teams[team].grpos-1].tf_name.text = teams[team].name;
					tB1[teams[team].grpos-1] = teams[team];
					tB[teams[team].grpos-1].obj = teams[team];
				}
			}
		}
	}
	this.frame_4 = function() {
		this.stop();
		
		/* Постепенное исчезновение фрагмента ролика
		Постепенно скрывает экземпляр символа путем уменьшения свойства альфа-канала до минимума в событии Tick.
		
		Инструкции:
		1. Для изменения скорости исчезновения экземпляра символа замените значение 0,01 в коде ниже (можно задать значение от 0,0 до 1,0). Чем больше значение, тем быстрее исчезнет объект.
		2. Так как в анимации используется событие Tick, движение происходит только при переходе точки воспроизведения к следующему кадру. На скорость анимации также влияет частота кадров документа.
		
		
		var DayNumber_FadeOutCbk = fl_FadeSymbolOut.bind(this);
		this.addEventListener('tick', DayNumber_FadeOutCbk);
		this.DayNumber.alpha = 1;
		
		function fl_FadeSymbolOut()
		{
			this.DayNumber.alpha -= 0.3;
			if(this.DayNumber.alpha <= 0.1)
			{
				this.removeEventListener('tick', DayNumber_FadeOutCbk);
				this.gotoAndStop(5);
			}
		}
		*/
	}
	this.frame_5 = function() {
		this.stop();
		var update = ef.bind(this);; //объект таймера
		var min; //минуты матча
		
		this.tf_min.text = 0;
		
		//if только для первого дня, чтобы не создавать новых слушателей
		if (day == 0 && !repeat) {
		this.bt_5_start.addEventListener("click", click_bt_5_start.bind(this));
		this.bt_5_nazad.addEventListener("click", click_bt_5_nazad.bind(this));
		this.bt_5_next.addEventListener("click", click_bt_5_next.bind(this));
		
		this.speed1.addEventListener("click", speed1.bind(this));
		this.speed5.addEventListener("click", speed5.bind(this));
		this.speed20.addEventListener("click", speed20.bind(this));
		this.speed50.addEventListener("click", speed50.bind(this));
		}
		
		if (day == 0){
			//скорость изначально 
			createjs.Ticker.setFPS(6);
			this.speed1.fon_blue.visible = true;
			this.speed5.fon_blue.visible = false;
			this.speed20.fon_blue.visible = true;
			this.speed50.fon_blue.visible = true;
		}
		
		this.bt_5_start.visible = true;
		this.bt_5_next.visible = false;
		
		//НАЖИМАЕМ КНОПКУ ДАЛЕЕ
		function click_bt_5_next() {
			if(min == 60)this.gotoAndStop(3);
			getGrpos();//рассчитываем grpos соглано points и личным встречам
		}
		
		//НАЖИМАЕМ КНОПКУ СТАРТ
		function click_bt_5_start() {
			min = 0;
			this.tf_min.text = min;
			this.clock.strelka.rotation = 0;
			
			this.addEventListener('tick', update); 
		
			//мгновенный расчет голов всех команд в свойства score1 2 и всех параметров
			saveAllGoalsDay();
			
			//кнопка старт исчезает
			this.bt_5_start.visible = false;
			this.bt_5_nazad.visible = false;
		}
		
		function ef() {
			//  Вращение стрелки
			if (this.clock.strelka.rotation < 360) {
				this.clock.strelka.rotation += 6; //6 по умолчанию для исключения ошибок!
				min ++;
				this.tf_min.text = min;
			} else {
				this.clock.strelka.rotation = 0;
				this.removeEventListener('tick', update);
				this.bt_5_next.visible = true;
			}
		
		
			//изменение счета в зависимости от min и score
			//gameDayA[i].score1 - окончательный счет первой команды
			for (var i = 0; i < 4; i++) {
				
				if(gameDayA[i].score1Time[0] == min) {
					gameDayA[i].fon_goal1.visible = true;
					gameDayA[i].goals1.text ++;
					//удаляем первый элемент - минута первого гола
					gameDayA[i].score1Time.shift();
				} else {
					gameDayA[i].fon_goal1.visible = false;
				}
		
				if(gameDayA[i].score2Time[0] == min) {
					gameDayA[i].fon_goal2.visible = true;
					gameDayA[i].goals2.text ++;
					gameDayA[i].score2Time.shift();
				} else {
					gameDayA[i].fon_goal2.visible = false;
				}
				
				if(gameDayB[i].score1Time[0] == min) {
					gameDayB[i].fon_goal1.visible = true;
					gameDayB[i].goals1.text ++;
					gameDayB[i].score1Time.shift();
				} else {
					gameDayB[i].fon_goal1.visible = false;
				}
			
				if(gameDayB[i].score2Time[0] == min) {
					gameDayB[i].fon_goal2.visible = true;
					gameDayB[i].goals2.text ++;
					gameDayB[i].score2Time.shift();
				} else {
					gameDayB[i].fon_goal2.visible = false;
				}
				
				//добавляем "*" при ОТ
				
				if (min == 60) {
					if (gameDayA[i].obj1.ot) {
						gameDayA[i].goals1.text += "*";
						gameDayA[i].obj1.ot = false;
					}
					if (gameDayA[i].obj2.ot) {
						gameDayA[i].goals2.text += "*";
						gameDayA[i].obj2.ot = false;
					} 		
					if (gameDayB[i].obj1.ot) {
						gameDayB[i].goals1.text += "*";
						gameDayB[i].obj1.ot = false;
					}
					if (gameDayB[i].obj2.ot) {
						gameDayB[i].goals2.text += "*";
						gameDayB[i].obj2.ot = false;
					} 
				}
				
			}
		}
		
		function click_bt_5_nazad() {
			this.gotoAndStop("turtab");
		}
		
		this.dayN.text = day + 1;
		
		//массив строчек с командами и голами
		if (day == 0){
			gameDayA = [this.gnA1, this.gnA2, this.gnA3, this.gnA4];
			gameDayB = [this.gnB1, this.gnB2, this.gnB3, this.gnB4];
		}
		
		//команда расставляет команды согласно расписания и текущего дня
		gameDay();
		
		
		function speed1() {
			createjs.Ticker.setFPS(1);
			
			this.speed1.fon_blue.visible = false;
			this.speed5.fon_blue.visible = true;
			this.speed20.fon_blue.visible = true;
			this.speed50.fon_blue.visible = true;
		}
		
		function speed5() {
			createjs.Ticker.setFPS(6);
			
			this.speed1.fon_blue.visible = true;
			this.speed5.fon_blue.visible = false;
			this.speed20.fon_blue.visible = true;
			this.speed50.fon_blue.visible = true;
		}
		
		function speed20() {
			createjs.Ticker.setFPS(24);
			
			this.speed1.fon_blue.visible = true;
			this.speed5.fon_blue.visible = true;
			this.speed20.fon_blue.visible = false;
			this.speed50.fon_blue.visible = true;
		}
		
		function speed50() {
			createjs.Ticker.setFPS(60);
			this.speed1.fon_blue.visible = true;
			this.speed5.fon_blue.visible = true;
			this.speed20.fon_blue.visible = true;
			this.speed50.fon_blue.visible = false;
		}
	}
	this.frame_6 = function() {
		this.stop();
		var update = ef.bind(this);; //объект таймера
		var min; //минуты матча
		
		//этапы
		var round = 0; //всего 4, 4 раунд - финал
		
		if (!repeat) {
			this.bt_6_start.addEventListener("click", click_bt_6_start.bind(this));
			this.bt_6_nazad.addEventListener("click", click_bt_6_nazad.bind(this));
			
			this.speed11.addEventListener("click", speed11.bind(this));
			this.speed55.addEventListener("click", speed55.bind(this));
			this.speed2020.addEventListener("click", speed2020.bind(this));
			this.speed5050.addEventListener("click", speed5050.bind(this));
			
			//скорость по умолчанию 5
			createjs.Ticker.setFPS(6);
			this.speed11.fon_blue.visible = true;
			this.speed55.fon_blue.visible = false;
			this.speed2020.fon_blue.visible = true;
			this.speed5050.fon_blue.visible = true;
		}
		
		//НАЖИМАЕМ КНОПКУ СТАРТ
		function click_bt_6_start() {
			round++;
			this.bt_6_start.visible = false;
			min = 0;
			this.tf_min2.text = min;
			this.clock2.strelka.rotation = 0;
		
			this.addEventListener('tick', update);
		
			//мгновенный расчет голов
			if (round == 1) saveAllGoalsDay2(this);
		}
		
		function ef() {
			//  Вращение стрелки
			if (this.clock2.strelka.rotation < 360) {
				this.clock2.strelka.rotation += 6; //6 по умолчанию для исключения ошибок!
				min++;
				this.tf_min2.text = min;
			} else {
				this.clock2.strelka.rotation = 0;
				min = 0; //из-за этой ерунды дважды обходило  if (min == 60)
				this.removeEventListener('tick', update);
			}
		
			if (round == 1) {
				//изменение счета для блоков 1-4!
				if (this.block_1.score1Time[0] == min) {
					this.block_1.goals1.text++;
					this.block_1.score1Time.shift();
					this.block_1.fon_goal1.visible = true;
				} else {
					this.block_1.fon_goal1.visible = false;
				}
		
				if (this.block_1.score2Time[0] == min) {
					this.block_1.goals2.text++;
					this.block_1.score2Time.shift();
					this.block_1.fon_goal2.visible = true;
				} else {
					this.block_1.fon_goal2.visible = false;
				}
		
				if (this.block_2.score1Time[0] == min) {
					this.block_2.goals1.text++;
					this.block_2.score1Time.shift();
					this.block_2.fon_goal1.visible = true;
				} else {
					this.block_2.fon_goal1.visible = false;
				}
		
				if (this.block_2.score2Time[0] == min) {
					this.block_2.goals2.text++;
					this.block_2.score2Time.shift();
					this.block_2.fon_goal2.visible = true;
				} else {
					this.block_2.fon_goal2.visible = false;
				}
		
				if (this.block_3.score1Time[0] == min) {
					this.block_3.goals1.text++;
					this.block_3.score1Time.shift();
					this.block_3.fon_goal1.visible = true;
				} else {
					this.block_3.fon_goal1.visible = false;
				}
		
				if (this.block_3.score2Time[0] == min) {
					this.block_3.goals2.text++;
					this.block_3.score2Time.shift();
					this.block_3.fon_goal2.visible = true;
				} else {
					this.block_3.fon_goal2.visible = false;
				}
		
		
				if (this.block_4.score1Time[0] == min) {
					this.block_4.goals1.text++;
					this.block_4.score1Time.shift();
					this.block_4.fon_goal1.visible = true;
				} else {
					this.block_4.fon_goal1.visible = false;
				}
		
				if (this.block_4.score2Time[0] == min) {
					this.block_4.goals2.text++;
					this.block_4.score2Time.shift();
					this.block_4.fon_goal2.visible = true;
				} else {
					this.block_4.fon_goal2.visible = false;
				}
		
				if (min == 60) {
					if (teamsPO[0].ot) {
						this.block_1.goals1.text += "*";
						teamsPO[0].ot = false;
					} else if (teamsPO[1].ot) {
						this.block_1.goals2.text += "*";
						teamsPO[1].ot;
					}
		
					if (teamsPO[2].ot) {
						this.block_2.goals1.text += "*";
						teamsPO[2].ot = false;
					} else if (teamsPO[3].ot) {
						this.block_2.goals2.text += "*";
						teamsPO[3].ot = false;
					}
		
					if (teamsPO[4].ot) {
						this.block_3.goals1.text += "*";
						teamsPO[4].ot = false;
					} else if (teamsPO[5].ot) {
						this.block_3.goals2.text += "*";
						teamsPO[5].ot = false;
					}
		
					if (teamsPO[6].ot) {
						this.block_4.goals1.text += "*";
						teamsPO[6].ot = false;
					} else if (teamsPO[7].ot) {
						this.block_4.goals2.text += "*";
						teamsPO[7].ot = false;
					}
		
					this.bt_6_start.visible = true;
		
					//размещаем команды в блоках полуфинала
					//console.log(this.block_5.team1.name);
					this.block_5.team1.text = this.block_5.t1.name;
					this.block_5.team2.text = this.block_5.t2.name;
					this.block_6.team1.text = this.block_6.t1.name;
					this.block_6.team2.text = this.block_6.t2.name;
		
					this.block_5.goals1.text = this.block_5.goals2.text = 0;
					this.block_6.goals1.text = this.block_6.goals2.text = 0;
		
					//мгновенный расчет голов
					saveAllGoalsDay3(this);
		
					return;
				}
			}
		
			if (round == 2) {
				if (this.block_5.score1Time[0] == min) {
					this.block_5.goals1.text++;
					this.block_5.score1Time.shift();
					this.block_5.fon_goal1.visible = true;
				} else {
					this.block_5.fon_goal1.visible = false;
				}
		
				if (this.block_5.score2Time[0] == min) {
					this.block_5.goals2.text++;
					this.block_5.score2Time.shift();
					this.block_5.fon_goal2.visible = true;
				} else {
					this.block_5.fon_goal2.visible = false;
				}
		
				if (this.block_6.score1Time[0] == min) {
					this.block_6.goals1.text++;
					this.block_6.score1Time.shift();
					this.block_6.fon_goal1.visible = true;
				} else {
					this.block_6.fon_goal1.visible = false;
				}
		
				if (this.block_6.score2Time[0] == min) {
					this.block_6.goals2.text++;
					this.block_6.score2Time.shift();
					this.block_6.fon_goal2.visible = true;
				} else {
					this.block_6.fon_goal2.visible = false;
				}
		
				if (min == 60) {
					if (this.block_5.t1.ot) {
						this.block_5.goals1.text += "*";
						this.block_5.t1.ot = false;
					} else if (this.block_5.t2.ot) {
						this.block_5.goals2.text += "*";
						this.block_5.t2.ot = false;
					}
					if (this.block_6.t1.ot) {
						this.block_6.goals1.text += "*";
						this.block_6.t1.ot = false;
					} else if (this.block_6.t2.ot) {
						this.block_6.goals2.text += "*";
						this.block_6.t2.ot = false;
					}
		
		
					this.bt_6_start.visible = true;
		
					//размещаем команды в блоках финала и 3 место
					this.block_7.team1.text = this.block_7.t1.name;
					this.block_7.team2.text = this.block_7.t2.name;
					this.block_8.team1.text = this.block_8.t1.name;
					this.block_8.team2.text = this.block_8.t2.name;
		
					this.block_7.goals1.text = this.block_7.goals2.text = 0;
					this.block_8.goals1.text = this.block_8.goals2.text = 0;
		
					//мгновенный расчет голов
					saveAllGoalsDay4(this);
		
					return;
				}
			}
		
			if (round == 3) {
				if (this.block_8.score1Time[0] == min) {
					this.block_8.goals1.text++;
					this.block_8.score1Time.shift();
					this.block_8.fon_goal1.visible = true;
				} else {
					this.block_8.fon_goal1.visible = false;
				}
		
				if (this.block_8.score2Time[0] == min) {
					this.block_8.goals2.text++;
					this.block_8.score2Time.shift();
					this.block_8.fon_goal2.visible = true;
				} else {
					this.block_8.fon_goal2.visible = false;
				}
		
				//добавляем "*" при ОТ
				if (min == 60) {
					if (this.block_8.t1.ot) {
						this.block_8.goals1.text += "*";
						this.block_8.t1.ot = false;
					} else if (this.block_8.t2.ot) {
						this.block_8.goals2.text += "*";
						this.block_8.t2.ot = false;
					}
		
					if (this.block_8.delta > 0) {
						this.block_8.t3 = this.block_8.t1; //бронза
						this.block_8.fon_goal1_3.visible = true;
					} else if (this.block_8.delta < 0) {
						this.block_8.t3 = this.block_8.t2; //бронза
						this.block_8.fon_goal2_3.visible = true;
					}
		
					this.bt_6_start.visible = true;
					return;
				}
			}
		
			if (round == 4) {
				if (this.block_7.score1Time[0] == min) {
					this.block_7.goals1.text++;
					this.block_7.score1Time.shift();
					this.block_7.fon_goal1.visible = true;
				} else {
					this.block_7.fon_goal1.visible = false;
				}
		
				if (this.block_7.score2Time[0] == min) {
					this.block_7.goals2.text++;
					this.block_7.score2Time.shift();
					this.block_7.fon_goal2.visible = true;
				} else {
					this.block_7.fon_goal2.visible = false;
				}
		
				//добавляем "*" при ОТ
				if (min == 60) {
					if (this.block_7.t1.ot) {
						this.block_7.goals1.text += "*";
						this.block_7.t1.ot = false;
					} else if (this.block_7.t2.ot) {
						this.block_7.goals2.text += "*";
						this.block_7.t2.ot = false;
					}
		
					// кто победил
					if (this.block_7.delta > 0) {
						this.block_7.t3 = this.block_7.t1; //победитель
						this.block_7.fon_goal1_1.visible = true;
						this.block_7.t4 = this.block_7.t2; //серебро
						this.block_7.fon_goal2_2.visible = true;
					} else if (this.block_7.delta < 0) {
						this.block_7.t3 = this.block_7.t2; //победитель
						this.block_7.fon_goal2_1.visible = true;
						this.block_7.t4 = this.block_7.t1;
						this.block_7.fon_goal1_2.visible = true;
					}
					//
		
					//кнопка назад появляется
					this.bt_6_nazad.visible = true;
				}
			}
		}
		
		function click_bt_6_nazad() {
			repeat = true;
			day = 0;
			round = 0;
			this.gotoAndStop(0);
			this.bt_6_start.visible = true;
			this.bt_6_nazad.visible = false;
			
		
			
			/*
			for (team in teams) {
				teams[team].pob = 0;
				teams[team].por = 0;
				teams[team].points = 0;
				teams[team].goals1 = 0;
				teams[team].goals2 = 0;
				teams[team].group = '';
			}
			*/
			//очистка блоков 5,6,7,8
			this.block_5.team1.text = "";
			this.block_5.team2.text = "";	
			this.block_5.goals1.text = "";
			this.block_5.goals2.text = "";
			this.block_5.t1.ot = false;
			this.block_5.t2.ot = false;
			
			this.block_6.team1.text = "";
			this.block_6.team2.text = "";	
			this.block_6.goals1.text = "";
			this.block_6.goals2.text = "";
			this.block_6.t1.ot = false;
			this.block_6.t2.ot = false;
		
			this.block_7.team1.text = "";
			this.block_7.team2.text = "";	
			this.block_7.goals1.text = "";
			this.block_7.goals2.text = "";
			this.block_7.t1.ot = false;
			this.block_7.t2.ot = false;
			this.block_7.fon_goal1_1.visible = false;
			this.block_7.fon_goal2_2.visible = false;
			this.block_7.fon_goal2_1.visible = false;
			this.block_7.fon_goal1_2.visible = false;
			
			this.block_8.team1.text = "";
			this.block_8.team2.text = "";	
			this.block_8.goals1.text = "";
			this.block_8.goals2.text = "";
			this.block_8.t1.ot = false;
			this.block_8.t2.ot = false;
			this.block_8.fon_goal1_1.visible = false;
			this.block_8.fon_goal2_2.visible = false;
			this.block_8.fon_goal1_3.visible = false;
			this.block_8.fon_goal2_3.visible = false;
		
				teams = {
			Canada: 		{pos: 1,att: 95,def: 89,name:'Канада',grpos: 1, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Russia: 		{pos: 2,att: 94,def: 88,name:'Россия',grpos: 1, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Sweden: 		{pos: 3,att: 83,def: 82,name:'Швеция',grpos: 2, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Finland: 		{pos: 4,att: 82,def: 82,name:'Финляндия',grpos: 2, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Czech: 			{pos: 5,att: 75,def: 75,name:'Чехия',grpos: 3, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Usa: 			{pos: 6,att: 74,def: 75,name:'США',grpos: 3, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Germany: 		{pos: 7,att: 68,def: 66,name:'Германия',grpos: 4, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Switzerland: 	{pos: 8,att: 64,def: 62,name:'Швейцария',grpos: 4, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Norway: 		{pos: 9,att: 58,def: 56,name:'Норвегия',grpos: 5, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Slovakia: 		{pos:10,att: 57,def: 52,name:'Словакия',grpos: 5, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Belarus: 		{pos:11,att: 55,def: 52,name:'Беларусь',grpos: 6, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			France: 		{pos:12,att: 46,def: 50,name:'Франция',grpos: 6, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Latvia: 		{pos:13,att: 42,def: 43,name:'Латвия',grpos: 7, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Denmark: 		{pos:14,att: 38,def: 42,name:'Дания',grpos: 7, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Slovenia: 		{pos:15,att: 38,def: 40,name:'Словения',grpos: 8, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
			Korea: 			{pos:16,att: 35,def: 36,name:'Ю.Корея',grpos: 8, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]}
			}								
			
		}
		
		
		//заносим в массив первые четыре команды каждой группы
		for (team in teams) {
			if (teams[team].group == 'A' && teams[team].grpos < 5) {
				tA7[teams[team].grpos - 1] = teams[team];
			}
			if (teams[team].group == 'B' && teams[team].grpos < 5) {
				tB7[teams[team].grpos - 1] = teams[team];
			}
		}
		
		
		//расстановка 8 команд по блокам 
		gameBlock1(this);
		
		
		function speed11() {
			createjs.Ticker.setFPS(1);
			
			this.speed11.fon_blue.visible = false;
			this.speed55.fon_blue.visible = true;
			this.speed2020.fon_blue.visible = true;
			this.speed5050.fon_blue.visible = true;
		}
		
		function speed55() {
			createjs.Ticker.setFPS(6);
			
			this.speed11.fon_blue.visible = true;
			this.speed55.fon_blue.visible = false;
			this.speed2020.fon_blue.visible = true;
			this.speed5050.fon_blue.visible = true;
		}
		
		function speed2020() {
			createjs.Ticker.setFPS(24);
			
			this.speed11.fon_blue.visible = true;
			this.speed55.fon_blue.visible = true;
			this.speed2020.fon_blue.visible = false;
			this.speed5050.fon_blue.visible = true;
		}
		
		function speed5050() {
			createjs.Ticker.setFPS(60);
			this.speed11.fon_blue.visible = true;
			this.speed55.fon_blue.visible = true;
			this.speed2020.fon_blue.visible = true;
			this.speed5050.fon_blue.visible = false;
		}
		playSound("organ2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// Actions
	this.text = new cjs.Text("Кадр 0", "bold 30px 'Myriad Pro'", "#00FF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 222;
	this.text.parent = this;
	this.text.setTransform(435.8,644.1);

	this.text_1 = new cjs.Text("Кадр 0", "bold 30px 'Myriad Pro'", "#00FF00");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 222;
	this.text_1.parent = this;
	this.text_1.setTransform(400.6,-51.5);

	this.bt_5_next = new lib.bt_Next();
	this.bt_5_next.parent = this;
	this.bt_5_next.setTransform(600.5,527.8,1,1.25);
	this.bt_5_next.visible = false;
	new cjs.ButtonHelper(this.bt_5_next, 0, 1, 2, false, new lib.bt_Next(), 3);

	this.speed5050 = new lib.speed50();
	this.speed5050.parent = this;
	this.speed5050.setTransform(381.1,538.4);
	new cjs.ButtonHelper(this.speed5050, 0, 1, 2, false, new lib.speed50(), 3);

	this.speed2020 = new lib.speed20();
	this.speed2020.parent = this;
	this.speed2020.setTransform(259.1,538.4);
	new cjs.ButtonHelper(this.speed2020, 0, 1, 2, false, new lib.speed20(), 3);

	this.speed55 = new lib.speed5();
	this.speed55.parent = this;
	this.speed55.setTransform(141.3,538.4);
	new cjs.ButtonHelper(this.speed55, 0, 1, 2, false, new lib.speed5(), 3);

	this.speed11 = new lib.speed1();
	this.speed11.parent = this;
	this.speed11.setTransform(29.4,538.4);
	new cjs.ButtonHelper(this.speed11, 0, 1, 2, false, new lib.speed1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{y:-51.5,text:"Кадр 0"}},{t:this.text,p:{x:435.8,y:644.1,text:"Кадр 0"}}]}).to({state:[{t:this.text_1,p:{y:-48.5,text:"Кадр 1"}},{t:this.text,p:{x:436.8,y:720.8,text:"Кадр 1"}}]},1).to({state:[{t:this.text_1,p:{y:-48.5,text:"Кадр 2"}},{t:this.text,p:{x:392,y:630,text:"Кадр 2"}}]},1).to({state:[{t:this.text_1,p:{y:-51.5,text:"Кадр 3"}},{t:this.text,p:{x:393.7,y:615.9,text:"Кадр 3"}}]},1).to({state:[{t:this.text_1,p:{y:-39,text:"Кадр 4"}},{t:this.text,p:{x:400.6,y:603.7,text:"Кадр 4"}}]},1).to({state:[{t:this.text_1,p:{y:-57.7,text:"Кадр 5"}},{t:this.text,p:{x:410.1,y:619.1,text:"Кадр 5"}},{t:this.bt_5_next}]},1).to({state:[{t:this.text_1,p:{y:-57.7,text:"Кадр 6"}},{t:this.text,p:{x:410.1,y:619.1,text:"Кадр 6"}},{t:this.speed11},{t:this.speed55},{t:this.speed2020},{t:this.speed5050}]},1).wait(1));

	// Слой 1
	this.text_2 = new cjs.Text("1/4 финала", "24px 'Times New Roman'", "#000033");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 188;
	this.text_2.parent = this;
	this.text_2.setTransform(125.1,59);

	this.text_3 = new cjs.Text("1/2 финала", "24px 'Times New Roman'", "#000033");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 29;
	this.text_3.lineWidth = 212;
	this.text_3.parent = this;
	this.text_3.setTransform(395,59);

	this.text_4 = new cjs.Text("3 место", "24px 'Times New Roman'", "#000033");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 29;
	this.text_4.lineWidth = 92;
	this.text_4.parent = this;
	this.text_4.setTransform(684.3,388.4);

	this.text_5 = new cjs.Text("Финал", "24px 'Times New Roman'", "#000033");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 29;
	this.text_5.lineWidth = 116;
	this.text_5.parent = this;
	this.text_5.setTransform(645,59);

	this.block_8 = new lib.gr_playoff();
	this.block_8.parent = this;
	this.block_8.setTransform(696.7,438.4,1,1,0,0,0,161.1,18.4);

	this.block_6 = new lib.gr_playoff();
	this.block_6.parent = this;
	this.block_6.setTransform(441.4,394.4,1,1,0,0,0,161.1,18.4);

	this.block_5 = new lib.gr_playoff();
	this.block_5.parent = this;
	this.block_5.setTransform(441.4,186.9,1,1,0,0,0,161.1,18.4);

	this.block_4 = new lib.gr_playoff();
	this.block_4.parent = this;
	this.block_4.setTransform(186.4,438.4,1,1,0,0,0,161.1,18.4);

	this.block_3 = new lib.gr_playoff();
	this.block_3.parent = this;
	this.block_3.setTransform(186.4,338.4,1,1,0,0,0,161.1,18.4);

	this.block_2 = new lib.gr_playoff();
	this.block_2.parent = this;
	this.block_2.setTransform(186.4,238.4,1,1,0,0,0,161.1,18.4);

	this.text_6 = new cjs.Text("Playoff", "36px 'Arial Rounded MT Bold'", "#000066");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 44;
	this.text_6.lineWidth = 162;
	this.text_6.parent = this;
	this.text_6.setTransform(404.3,-0.1);

	this.block_1 = new lib.gr_playoff();
	this.block_1.parent = this;
	this.block_1.setTransform(186.4,138.4,1,1,0,0,0,161.1,18.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000044").ss(1,1,1).p("An06TIAADmAoBlSIAAj2An9E9IAAEnAM3sEISwAAIAAFnAf0MBIAAlJANFMGISwAAAoBZ5IAAjJA6p6XISwAAA6rZ8ISpAAA6wlQISoAAA6pE9ISpAAEg6bggoMB1BAAAEg6lAgpMB1BAAA");
	this.shape.setTransform(401,309);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.block_1},{t:this.text_6},{t:this.block_2},{t:this.block_3},{t:this.block_4},{t:this.block_5},{t:this.block_6},{t:this.block_8},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2}]},6).wait(1));

	// кнопка
	this.tf_min2 = new cjs.Text("", "20px 'Arial'", "#FFFFFF");
	this.tf_min2.name = "tf_min2";
	this.tf_min2.textAlign = "center";
	this.tf_min2.lineHeight = 24;
	this.tf_min2.lineWidth = 50;
	this.tf_min2.parent = this;
	this.tf_min2.setTransform(681.7,198.8);

	this.bt_6_nazad = new lib.bt_Nazad();
	this.bt_6_nazad.parent = this;
	this.bt_6_nazad.setTransform(599.7,536,1,1.25);
	this.bt_6_nazad.visible = false;
	new cjs.ButtonHelper(this.bt_6_nazad, 0, 1, 2, false, new lib.bt_Nazad(), 3);

	this.bt_6_start = new lib.bt_Start();
	this.bt_6_start.parent = this;
	this.bt_6_start.setTransform(533.9,536,1,1.25);
	new cjs.ButtonHelper(this.bt_6_start, 0, 1, 2, false, new lib.bt_Start(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bt_6_start},{t:this.bt_6_nazad},{t:this.tf_min2}]},6).wait(1));

	// clock
	this.clock2 = new lib.clock();
	this.clock2.parent = this;
	this.clock2.setTransform(683.2,175.4,0.684,0.684,0,0,0,0.2,0.1);
	this.clock2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clock2).wait(6).to({_off:false},0).wait(1));

	// фон
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,255,0.2)").s().p("AuDDhQgrAAgXgWQgZgYABgzIAAj+QgBhiBbAAIcIAAQBaAAAABiIAAD+QgBAzgYAYQgXAWgqAAg");
	this.shape_1.setTransform(404,19.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6).to({_off:false},0).wait(1));

	// рамка
	this.block_7 = new lib.gr_playoff();
	this.block_7.parent = this;
	this.block_7.setTransform(697,291.4,1,1,0,0,0,161.1,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A80B1C").s().p("AxCHBIAAuBMAiFAAAIAAOBg");
	this.shape_2.setTransform(633.3,311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.block_7}]},6).wait(1));

	// speed
	this.speed50 = new lib.speed50();
	this.speed50.parent = this;
	this.speed50.setTransform(670.7,464.9);
	new cjs.ButtonHelper(this.speed50, 0, 1, 2, false, new lib.speed50(), 3);

	this.speed20 = new lib.speed20();
	this.speed20.parent = this;
	this.speed20.setTransform(670.7,413.4);
	new cjs.ButtonHelper(this.speed20, 0, 1, 2, false, new lib.speed20(), 3);

	this.speed5 = new lib.speed5();
	this.speed5.parent = this;
	this.speed5.setTransform(546.2,464.9);
	new cjs.ButtonHelper(this.speed5, 0, 1, 2, false, new lib.speed5(), 3);

	this.speed1 = new lib.speed1();
	this.speed1.parent = this;
	this.speed1.setTransform(546.2,413.4);
	new cjs.ButtonHelper(this.speed1, 0, 1, 2, false, new lib.speed1(), 3);

	this.text_7 = new cjs.Text("Скорость игры:", "24px 'LuzSans-Book'", "#000099");
	this.text_7.lineHeight = 34;
	this.text_7.lineWidth = 176;
	this.text_7.parent = this;
	this.text_7.setTransform(546.8,359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_7},{t:this.speed1},{t:this.speed5},{t:this.speed20},{t:this.speed50}]},5).to({state:[]},1).wait(1));

	// min
	this.tf_min = new cjs.Text("", "25px 'Arial'", "#FFFFFF");
	this.tf_min.name = "tf_min";
	this.tf_min.textAlign = "center";
	this.tf_min.lineHeight = 30;
	this.tf_min.lineWidth = 59;
	this.tf_min.parent = this;
	this.tf_min.setTransform(400.5,497.9);
	this.tf_min._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tf_min).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

	// часы
	this.clock = new lib.clock();
	this.clock.parent = this;
	this.clock.setTransform(403.9,457.1,1.053,1.053,0,0,0,0.1,0.1);
	this.clock._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clock).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

	// кнопка
	this.bt_5_nazad = new lib.bt_Nazad();
	this.bt_5_nazad.parent = this;
	this.bt_5_nazad.setTransform(37.9,527.8,1,1.25);
	new cjs.ButtonHelper(this.bt_5_nazad, 0, 1, 2, false, new lib.bt_Nazad(), 3);

	this.bt_5_start = new lib.bt_Start();
	this.bt_5_start.parent = this;
	this.bt_5_start.setTransform(600.8,527.8,1,1.25);
	new cjs.ButtonHelper(this.bt_5_start, 0, 1, 2, false, new lib.bt_Start(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bt_5_start},{t:this.bt_5_nazad}]},5).to({state:[]},1).wait(1));

	// группы
	this.gnB4 = new lib.gr_gameday();
	this.gnB4.parent = this;
	this.gnB4.setTransform(589.7,293.9,1,1,0,0,0,162.5,18.6);

	this.gnB3 = new lib.gr_gameday();
	this.gnB3.parent = this;
	this.gnB3.setTransform(589.7,243.9,1,1,0,0,0,162.5,18.6);

	this.gnB2 = new lib.gr_gameday();
	this.gnB2.parent = this;
	this.gnB2.setTransform(589.7,193.9,1,1,0,0,0,162.5,18.6);

	this.gnB1 = new lib.gr_gameday();
	this.gnB1.parent = this;
	this.gnB1.setTransform(589.7,143.9,1,1,0,0,0,162.5,18.6);

	this.gnA4 = new lib.gr_gameday();
	this.gnA4.parent = this;
	this.gnA4.setTransform(214.3,293.9,1,1,0,0,0,162.5,18.6);

	this.gnA3 = new lib.gr_gameday();
	this.gnA3.parent = this;
	this.gnA3.setTransform(214.3,243.9,1,1,0,0,0,162.5,18.6);

	this.gnA2 = new lib.gr_gameday();
	this.gnA2.parent = this;
	this.gnA2.setTransform(214.3,193.9,1,1,0,0,0,162.5,18.6);

	this.gnA1 = new lib.gr_gameday();
	this.gnA1.parent = this;
	this.gnA1.setTransform(214.3,143.9,1,1,0,0,0,162.5,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.gnA1},{t:this.gnA2},{t:this.gnA3},{t:this.gnA4},{t:this.gnB1},{t:this.gnB2},{t:this.gnB3},{t:this.gnB4}]},5).to({state:[]},1).wait(1));

	// день №
	this.text_8 = new cjs.Text("* - овертайм, буллиты", "18px 'Arial'", "#000033");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 22;
	this.text_8.lineWidth = 233;
	this.text_8.parent = this;
	this.text_8.setTransform(162.3,389.1);

	this.dayN = new cjs.Text("5", "25px 'BankGothic Md BT'", "#FFFFFF");
	this.dayN.name = "dayN";
	this.dayN.textAlign = "center";
	this.dayN.lineHeight = 28;
	this.dayN.lineWidth = 37;
	this.dayN.parent = this;
	this.dayN.setTransform(783.7,20);

	this.text_9 = new cjs.Text("День", "23px 'Courier New'", "#FFFFFF");
	this.text_9.lineHeight = 28;
	this.text_9.lineWidth = 68;
	this.text_9.parent = this;
	this.text_9.setTransform(694.6,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000044").ss(1,1,1).p("AxQAAMAihAAA");
	this.shape_3.setTransform(153.3,371.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AorjKIAAGVAonDLIRTAAAIsjKIxUAA");
	this.shape_4.setTransform(745.3,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.text_9},{t:this.dayN},{t:this.text_8}]},5).to({state:[]},1).wait(1));

	// текст
	this.text_10 = new cjs.Text("Группа B", "24px 'Times New Roman'", "#000066");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 29;
	this.text_10.lineWidth = 146;
	this.text_10.parent = this;
	this.text_10.setTransform(588.4,59);

	this.text_11 = new cjs.Text("Группа A", "24px 'Times New Roman'", "#000066");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 29;
	this.text_11.lineWidth = 146;
	this.text_11.parent = this;
	this.text_11.setTransform(212.9,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_11},{t:this.text_10}]},5).to({state:[]},1).wait(1));

	// фон
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000033").ss(0.5,1,1).p("ASJ19IW5AAQCMAAAACMIAADvQAACMiMAAI25AAQiMAAAAiMIAAjvQAAiMCMAAgACVrnMA2OAAAQBQAAAABQIAAfFQAABQhQAAMg2OAAAQhQAAAAhQIAA/FQAAhQBQAAgEg4igLnMA2nAAAQBQAAAABQIAAfFQAABQhQAAMg2nAAAQhQAAAAhQIAA/FQAAhQBQAAgEgoYgVrIW5AAQCMAAAACMIAADvQAACMiMAAI25AAQiMAAAAiMIAAjvQAAiMCMAAg");
	this.shape_5.setTransform(399,186.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgosAEMQiMAAAAiMIAAjtQAAiMCMAAIW5AAQCMAAAACMIAADtQAACMiMAAgAR0D6QiMAAAAiMIAAjtQAAiMCMAAIW5AAQCMAAAACMIAADtQAACMiMAAg");
	this.shape_6.setTransform(401,73);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,51,153,0.2)").s().p("ACVQzQhQAAAAhQIAA/FQAAhQBQAAMA2OAAAQBQAAAABQIAAfFQAABQhQAAgEg4iAQzQhQAAAAhQIAA/FQAAhQBQAAMA2nAAAQBQAAAABQIAAfFQAABQhQAAg");
	this.shape_7.setTransform(399,219.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},5).to({state:[]},1).wait(1));

	// полоса
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("Ao+FeIAAq7IR9AAIAAK7g");
	this.shape_8.setTransform(741.7,35);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

	// Слой 2
	this.DayNumber = new lib.Day();
	this.DayNumber.parent = this;
	this.DayNumber.setTransform(397.4,239.7,1,1,0,0,0,180,22.8);
	this.DayNumber._off = true;

	this.timeline.addTween(cjs.Tween.get(this.DayNumber).wait(4).to({_off:false},0).to({_off:true},1).wait(2));

	// разметка
	this.bt_3_next = new lib.bt_Next();
	this.bt_3_next.parent = this;
	this.bt_3_next.setTransform(600.1,534,1,1.25);
	new cjs.ButtonHelper(this.bt_3_next, 0, 1, 2, false, new lib.bt_Next(), 3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000066").ss(1,1,1).p("EAxLAA5IgCHZIAAfXEAxagnrMgACAmwEAmQgnlIAAHTIywAAIAAfZISwAAIK4AAEATggnrIAAHZIuEAAIuDAAIAAfZIODAAEAFcgnoIAAHWIAAfZIOEAAEgIngnrIAAHZIq8AAI9xAAAFZISIuDAAIAAfZIODAAIOEAAISwAAIK4AAAoqA5IAAHZIq8AAIAAfZIK8AAAFZA8IAAHWIAAfZEAmNAISIywAAIuEAAEAmNAA/IAAHTIAAfZATdA5IAAHZIAAfZAoqA5IcHAAIdpgBEgIngnrIcHAAId2AAEAmQggSIAAfZEgTjgnrIAAHZIAAfZIK8AAAzmA5IAAHZI9sAAEgxSAA5IdsAAIK8AAEgxVgnqIdygBIK8AAEgxXgA4MgACgmzEgxNgA4IdqgBEgxQAnsIdqgBEgxUAnsMgACgmzEAxJAISIq8AAEAxWggSIrGAA");
	this.shape_9.setTransform(386,272.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.bt_3_next}]},3).to({state:[]},1).wait(3));

	// подписи
	this.text_12 = new cjs.Text("Команда", "15px 'Arial'", "#000066");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 19;
	this.text_12.lineWidth = 154;
	this.text_12.parent = this;
	this.text_12.setTransform(165.9,288.8);

	this.text_13 = new cjs.Text("Очки", "15px 'Arial'", "#000066");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 19;
	this.text_13.lineWidth = 49;
	this.text_13.parent = this;
	this.text_13.setTransform(666.6,290.2);

	this.text_14 = new cjs.Text("Шайбы", "15px 'Arial'", "#000066");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 19;
	this.text_14.lineWidth = 82;
	this.text_14.parent = this;
	this.text_14.setTransform(570.1,290.2);

	this.text_15 = new cjs.Text("Поражения", "15px 'Arial'", "#000066");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 19;
	this.text_15.lineWidth = 78;
	this.text_15.parent = this;
	this.text_15.setTransform(465.3,288.8);

	this.text_16 = new cjs.Text("Победы", "15px 'Arial'", "#000066");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 19;
	this.text_16.lineWidth = 66;
	this.text_16.parent = this;
	this.text_16.setTransform(376,288.8);

	this.text_17 = new cjs.Text("Игры", "15px 'Arial'", "#000066");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 19;
	this.text_17.lineWidth = 39;
	this.text_17.parent = this;
	this.text_17.setTransform(296.4,288.8);

	this.text_18 = new cjs.Text("Команда", "15px 'Arial'", "#000066");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 19;
	this.text_18.lineWidth = 154;
	this.text_18.parent = this;
	this.text_18.setTransform(166.2,29.1);

	this.text_19 = new cjs.Text("Очки", "15px 'Arial'", "#000066");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 19;
	this.text_19.lineWidth = 49;
	this.text_19.parent = this;
	this.text_19.setTransform(666.9,30.5);

	this.text_20 = new cjs.Text("Шайбы", "15px 'Arial'", "#000066");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 19;
	this.text_20.lineWidth = 82;
	this.text_20.parent = this;
	this.text_20.setTransform(570.4,30.5);

	this.text_21 = new cjs.Text("Поражения", "15px 'Arial'", "#000066");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 19;
	this.text_21.lineWidth = 78;
	this.text_21.parent = this;
	this.text_21.setTransform(465.6,29.1);

	this.text_22 = new cjs.Text("Победы", "15px 'Arial'", "#000066");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 19;
	this.text_22.lineWidth = 66;
	this.text_22.parent = this;
	this.text_22.setTransform(376.3,29.1);

	this.text_23 = new cjs.Text("Игры", "15px 'Arial'", "#000066");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 19;
	this.text_23.lineWidth = 39;
	this.text_23.parent = this;
	this.text_23.setTransform(296.8,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12}]},3).to({state:[]},1).wait(3));

	// столбцы
	this.grB8 = new lib.group();
	this.grB8.parent = this;
	this.grB8.setTransform(385.5,513.7,1,1,0,0,0,314.5,12.5);

	this.grB7 = new lib.group();
	this.grB7.parent = this;
	this.grB7.setTransform(385.5,488.7,1,1,0,0,0,314.5,12.5);

	this.grB6 = new lib.group();
	this.grB6.parent = this;
	this.grB6.setTransform(385.5,463.7,1,1,0,0,0,314.5,12.5);

	this.grB5 = new lib.group();
	this.grB5.parent = this;
	this.grB5.setTransform(385.5,438.7,1,1,0,0,0,314.5,12.5);

	this.grB4 = new lib.group();
	this.grB4.parent = this;
	this.grB4.setTransform(385.5,413.7,1,1,0,0,0,314.5,12.5);

	this.grB3 = new lib.group();
	this.grB3.parent = this;
	this.grB3.setTransform(385.5,388.7,1,1,0,0,0,314.5,12.5);

	this.grB2 = new lib.group();
	this.grB2.parent = this;
	this.grB2.setTransform(385.5,363.7,1,1,0,0,0,314.5,12.5);

	this.grB1 = new lib.group();
	this.grB1.parent = this;
	this.grB1.setTransform(385.5,338.7,1,1,0,0,0,314.5,12.5);

	this.grA8 = new lib.group();
	this.grA8.parent = this;
	this.grA8.setTransform(385.8,254,1,1,0,0,0,314.5,12.5);

	this.grA7 = new lib.group();
	this.grA7.parent = this;
	this.grA7.setTransform(385.8,229,1,1,0,0,0,314.5,12.5);

	this.grA6 = new lib.group();
	this.grA6.parent = this;
	this.grA6.setTransform(385.8,204,1,1,0,0,0,314.5,12.5);

	this.grA5 = new lib.group();
	this.grA5.parent = this;
	this.grA5.setTransform(385.8,179,1,1,0,0,0,314.5,12.5);

	this.grA4 = new lib.group();
	this.grA4.parent = this;
	this.grA4.setTransform(385.8,154,1,1,0,0,0,314.5,12.5);

	this.grA3 = new lib.group();
	this.grA3.parent = this;
	this.grA3.setTransform(385.8,129,1,1,0,0,0,314.5,12.5);

	this.grA2 = new lib.group();
	this.grA2.parent = this;
	this.grA2.setTransform(385.8,104,1,1,0,0,0,314.5,12.5);

	this.grA1 = new lib.group();
	this.grA1.parent = this;
	this.grA1.setTransform(385.8,79,1,1,0,0,0,314.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.grA1},{t:this.grA2},{t:this.grA3},{t:this.grA4},{t:this.grA5},{t:this.grA6},{t:this.grA7},{t:this.grA8},{t:this.grB1},{t:this.grB2},{t:this.grB3},{t:this.grB4},{t:this.grB5},{t:this.grB6},{t:this.grB7},{t:this.grB8}]},3).to({state:[]},1).wait(3));

	// фон
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000044").ss(1,1,1).p("EgxWgYYMBisAAAIAAHjMhisAAAgEgxOAQOMBidAAAIAAILMhidAAAg");
	this.shape_10.setTransform(385.1,173.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("EgxNAYZIAAoLMBicAAAIAAILgEgxVgQ1IAAnjMBisAAAIAAHjg");
	this.shape_11.setTransform(385.1,173.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},3).to({state:[]},1).wait(3));

	// кнопка
	this.text_24 = new cjs.Text("Мировой рейтинг ИИХФ 2018", "28px 'LuzSans-Book'", "#000066");
	this.text_24.textAlign = "center";
	this.text_24.lineHeight = 39;
	this.text_24.lineWidth = 191;
	this.text_24.parent = this;
	this.text_24.setTransform(645.2,175.2);

	this.bt_2_champ = new lib.bt_2_champ();
	this.bt_2_champ.parent = this;
	this.bt_2_champ.setTransform(588.3,447.2,1,1.25);
	new cjs.ButtonHelper(this.bt_2_champ, 0, 1, 2, false, new lib.bt_2_champ(), 3);

	this.bt_2_nazad = new lib.bt_Nazad();
	this.bt_2_nazad.parent = this;
	this.bt_2_nazad.setTransform(588.3,524.2,1,1.25);
	new cjs.ButtonHelper(this.bt_2_nazad, 0, 1, 2, false, new lib.bt_Nazad(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bt_2_nazad},{t:this.bt_2_champ},{t:this.text_24}]},2).to({state:[]},1).wait(4));

	// фон
	this.instance = new lib.SKorea();
	this.instance.parent = this;
	this.instance.setTransform(107,542,0.5,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AAcA0IAAgpIgKAAQgJAAgFADQgEACgIANIgPAXIgWAAIATgcQAIgNAKgCQgQgCgHgHQgIgJABgMQgBgNAKgJQAKgIASAAIAvAAIAABngAgQggQgFAFABAHQAAAJAGAFQAHAEAQAAIATAAIAAgiIgZAAQgPAAgEAEg");
	this.shape_12.setTransform(231.3,559.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_13.setTransform(220.8,559.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAJAAQANAAAKAHQALAHAFAMQAFANAAAPQAAAQgFALQgGANgLAHQgLAHgMAAQgIAAgGgEQgIgEgEgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAJAJALAAQALAAAIgKQAJgKgBgTQABgUgJgKQgIgKgLAAQgLAAgIALg");
	this.shape_14.setTransform(210,561.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000099").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_15.setTransform(198.6,559.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000099").s().p("AAbBIIgYgnQgJgQgHgGQgHgGgKAAIAABDIgTAAIAAiOIATAAIAAA+QANAAAFgFQAFgFAIgTQAGgOAEgGQADgGAHgEQAIgEAIAAIAMABIAAAQIgEAAIgEAAQgJAAgEAEQgFAFgGAOQgHASgFAFQgFAFgGADQANACAOAWIAdAwg");
	this.shape_16.setTransform(188,557.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000099").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_17.setTransform(178.7,564.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000099").s().p("AgUA5QgRgRgDgfIgcAAIAAA+IgTAAIAAiOIATAAIAABBIAcAAQACgfARgSQASgSAaAAQAcAAASATQATAUAAAiQAAAigTAUQgSAUgcAAQgaAAgRgRgAgJgpQgNAPABAaQgBAcANAPQALAPAVAAQAUgBANgPQAMgPAAgbQABgbgMgOQgNgQgVAAQgVAAgLAQg");
	this.shape_18.setTransform(166.1,557.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000099").s().p("AAcA0IAAgpIgKAAQgJAAgEADQgFACgIANIgPAXIgWAAIATgcQAIgNAKgCQgQgCgHgHQgIgJABgMQAAgNAJgJQAKgIASAAIAvAAIAABngAgQggQgFAFABAHQAAAJAGAFQAHAEAQAAIATAAIAAgiIgZAAQgPAAgEAEg");
	this.shape_19.setTransform(241.7,528.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_20.setTransform(231.2,528.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000099").s().p("AAYA0IAAguIgvAAIAAAuIgSAAIAAhnIASAAIAAArIAvAAIAAgrIASAAIAABng");
	this.shape_21.setTransform(220.1,528.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000099").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_22.setTransform(209,528.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000099").s().p("AgpA0IAAhnIAoAAQAOAAAHADQAIACAEAHQAGAGAAAKQAAAHgEAGQgCAFgHAEQAIABAFAHQAEAHAAAJQgBAOgJAIQgJAHgTAAgAgYAlIAXAAQAOAAAGgDQAFgEAAgIQABgFgEgEQgDgFgFgBIgQgBIgVAAgAgYgHIATAAIAOgBQAEgCADgDQAEgEAAgFQAAgIgGgDQgGgDgNAAIgTAAg");
	this.shape_23.setTransform(198.5,528.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000099").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_24.setTransform(187.3,528.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000099").s().p("AgxA0IAAgPIAHAAQAGAAACgBQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBQABgDAAgNIAAhDIBQAAIAABnIgRAAIAAhYIgtAAIAAAyQgBASgBAGQgBAFgFAFQgFAEgLAAIgNAAg");
	this.shape_25.setTransform(175.4,528.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000099").s().p("AghBBQgOgKgIgSQgHgRAAgUQAAgXAIgQQAJgRAQgJQAPgIASAAQAWAAAOALQAPALAGATIgTAFQgFgQgJgHQgKgHgOAAQgQAAgLAIQgLAIgEAOQgFAMAAAPQAAARAGANQAFAOALAHQALAGAMAAQAQABALgKQALgJAEgSIATAFQgGAYgPAMQgQAMgWAAQgWAAgPgJg");
	this.shape_26.setTransform(163,526.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000099").s().p("AAcA0IAAgpIgKAAQgJAAgFADQgEACgIANIgPAXIgWAAIATgcQAIgNAKgCQgQgCgHgHQgIgJABgMQgBgNAKgJQAKgIASAAIAvAAIAABngAgQggQgFAFABAHQAAAJAGAFQAHAEAQAAIATAAIAAgiIgZAAQgPAAgEAEg");
	this.shape_27.setTransform(207.4,495.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_28.setTransform(196.9,495.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000099").s().p("AAYA0IAAguIgvAAIAAAuIgSAAIAAhnIASAAIAAArIAvAAIAAgrIASAAIAABng");
	this.shape_29.setTransform(185.8,495.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000099").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_30.setTransform(174.7,495.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000099").s().p("AAvBYIAAghIhdAAIAAAhIgRAAIAAgyIALAAQARgaAAhPIAAgUIBWAAIAAB9IANAAIAAAygAgRg/QAAASgDAgQgDAegKAVIBBAAIAAhtIgxAAg");
	this.shape_31.setTransform(162.1,494.8);

	this.instance_1 = new lib.Slovenia();
	this.instance_1.parent = this;
	this.instance_1.setTransform(107,511,0.5,0.5);

	this.instance_2 = new lib.Denmark();
	this.instance_2.parent = this;
	this.instance_2.setTransform(107,480,0.5,0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000099").s().p("AAcA0IAAgpIgKAAQgJAAgFADQgEACgIANIgPAXIgWAAIATgcQAIgNAKgCQgQgCgHgHQgIgJAAgMQAAgNAKgJQAKgIASAAIAvAAIAABngAgQggQgFAFAAAHQABAJAGAFQAHAEAQAAIATAAIAAgiIgZAAQgOAAgFAEg");
	this.shape_32.setTransform(231.6,465.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_33.setTransform(221.1,465.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000099").s().p("AAhBCIAAgdIhPAAIAAhnIARAAIAABYIAvAAIAAhYIASAAIAABYIALAAIAAAsg");
	this.shape_34.setTransform(210.2,466.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000099").s().p("AAYA0IAAguIgvAAIAAAuIgSAAIAAhnIASAAIAAArIAvAAIAAgrIASAAIAABng");
	this.shape_35.setTransform(198.6,465.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000099").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_36.setTransform(187.4,465.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000099").s().p("AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAJAAQANAAAKAHQALAHAFAMQAFANAAAPQAAAQgFALQgGANgLAHQgLAHgMAAQgIAAgGgEQgIgEgEgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAJAJALAAQALAAAIgKQAJgKgBgTQABgUgJgKQgIgKgLAAQgLAAgIALg");
	this.shape_37.setTransform(176.7,467.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000099").s().p("AgIBIIAAgSQgZgBgRgPQgRgOAAgYQAAgXARgOQAQgPAagBIAAgSIARAAIAAASQAcACAPAPQAQAPAAAVQAAAWgQAPQgPAPgcACIAAASgAAJAlQASAAALgKQALgKAAgRQAAgQgLgKQgLgJgSgCgAglgaQgLAKAAAQQAAARALAKQALAKASAAIAAhJQgRAAgMAKg");
	this.shape_38.setTransform(163.3,463.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000099").s().p("AAdA0IAAgpIgLAAQgJAAgFADQgEACgIANIgPAXIgWAAIATgcQAJgNAJgCQgQgCgHgHQgIgJAAgMQAAgNAKgJQAKgIASAAIAvAAIAABngAgQggQgFAFAAAHQABAJAGAFQAHAEAQAAIAUAAIAAgiIgaAAQgOAAgFAEg");
	this.shape_39.setTransform(215.8,434.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_40.setTransform(205.3,434.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000099").s().p("AgpA0IAAhnIAoAAQAOAAAHADQAIACAFAHQAFAGAAAKQAAAHgEAGQgCAFgHAEQAIABAEAHQAGAHgBAJQAAAOgKAIQgJAHgTAAgAgYAlIAXAAQAOAAAFgDQAGgEAAgIQAAgFgDgEQgDgFgFgBIgQgBIgVAAgAgYgHIATAAIAOgBQAEgCADgDQAEgEAAgFQAAgIgGgDQgFgDgOAAIgTAAg");
	this.shape_41.setTransform(194.7,434.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000099").s().p("AgIA0IAAhYIghAAIAAgPIBTAAIAAAPIghAAIAABYg");
	this.shape_42.setTransform(184.5,434.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000099").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_43.setTransform(174.3,434.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000099").s().p("Ag4BGIADgQQAFACADAAQAHAAADgFQADgFAAgSIAAhkIBZAAIAACOIgTAAIAAh9IgzAAIAABJQAAAWgCALQgCAKgHAGQgHAGgKAAQgGAAgJgDg");
	this.shape_44.setTransform(161.5,432.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000099").s().p("AAdA0IAAgpIgLAAQgJAAgFADQgEACgIANIgPAXIgWAAIATgcQAJgNAIgCQgPgCgHgHQgHgJgBgMQAAgNAKgJQAJgIATAAIAvAAIAABngAgQggQgEAFgBAHQAAAJAIAFQAGAEAQAAIAUAAIAAgiIgZAAQgQAAgEAEg");
	this.shape_45.setTransform(241.2,401.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_46.setTransform(230.7,401.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000099").s().p("AATA0IgTggQgFgKgEgDQgEgDgHAAIAAAwIgRAAIAAhnIARAAIAAAtQAJAAAEgDQADgEAGgPQAEgMAEgEQADgEAEgCIAOgBIADAAIAAAPIgEgBQgIAAgBADQgCACgFAKQgEAKgDAEQgDAEgHAEQALACALASIATAgg");
	this.shape_47.setTransform(221.5,401.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000099").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_48.setTransform(210.8,401.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000099").s().p("AgpA0IAAhnIAoAAQAOAAAHADQAIACAEAHQAGAGAAAKQAAAHgEAGQgCAFgHAEQAIABAFAHQAEAHAAAJQgBAOgJAIQgJAHgTAAgAgYAlIAXAAQAOAAAGgDQAFgEAAgIQABgFgEgEQgDgFgFgBIgQgBIgVAAgAgYgHIATAAIAOgBQAEgCADgDQAEgEAAgFQAAgIgGgDQgGgDgNAAIgTAAg");
	this.shape_49.setTransform(200.3,401.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000099").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_50.setTransform(189.1,401.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000099").s().p("AgxAzIAAgOIAHAAQAGAAACgBQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBQABgDAAgNIAAhDIBRAAIAABmIgSAAIAAhYIgtAAIAAAzQgBASgBAGQgBAGgFAEQgFAEgLAAIgNgBg");
	this.shape_51.setTransform(177.2,402);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000099").s().p("AghBBQgOgKgIgSQgHgSAAgTQAAgWAIgRQAJgRAQgJQAPgIASAAQAWAAAOALQAPALAGAUIgTAEQgFgPgJgIQgKgHgOAAQgQAAgLAIQgLAIgEANQgFANAAAOQAAASAGAOQAFANALAHQALAGAMABQAQgBALgIQALgKAEgRIATAEQgGAYgPALQgQANgWAAQgWAAgPgJg");
	this.shape_52.setTransform(164.8,400);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000099").s().p("AgpA0IAAhnIARAAIAAApIAWAAQAVAAAMAIQALAHAAAPQAAANgJAKQgKAJgVAAgAgYAlIATAAQAPAAAHgEQAIgEgBgJQAAgGgFgGQgFgFgRAAIgVAAg");
	this.shape_53.setTransform(241.1,369.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000099").s().p("AgfAoQgNgOAAgaQAAgQAFgMQAGgNALgGQAMgGAMAAQARAAALAIQALAJACAQIgRACQgCgKgGgGQgGgFgJAAQgMAAgJAKQgIAJAAAUQAAAVAIAJQAIAKAMAAQAKAAAHgHQAHgGACgNIARACQgCASgMAKQgMAKgRAAQgUAAgNgOg");
	this.shape_54.setTransform(230.9,369.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000099").s().p("AglBHIgCgRIAKACQAGAAADgCQAEgCACgEQACgCAEgLIABgEIgohnIATAAIAXA8IAGAXIAHgXIAWg8IASAAIgnBpIgKAXQgEAJgHAEQgFAEgJAAQgFAAgGgCg");
	this.shape_55.setTransform(220.6,371.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000099").s().p("AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAKAAQANAAAJAHQALAHAFAMQAFANAAAPQAAAQgGALQgFANgLAHQgLAHgMAAQgIAAgGgEQgIgEgEgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAIAJAMAAQALAAAIgKQAJgKAAgTQAAgUgJgKQgIgKgLAAQgKAAgJALg");
	this.shape_56.setTransform(210.3,371.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000099").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_57.setTransform(198.8,369.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000099").s().p("AgxA0IAAgPIAHAAQAFAAADgCQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQABgDAAgNIAAhDIBRAAIAABnIgSAAIAAhYIgtAAIAAAyQgBASgBAGQgBAGgFAEQgFAEgLAAIgNAAg");
	this.shape_58.setTransform(187,369.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000099").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_59.setTransform(176.1,369.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000099").s().p("Ag1BIIAAiOIBcAAIAAAQIhJAAIAAAtIAiAAQASgBALAEQALAEAHAJQAHAJAAAOQAAAKgFAKQgFAKgJAFQgKAHgXAAgAgiA3IAlAAQAPAAAIgGQAIgGAAgNQAAgIgFgGQgEgHgIgBQgIgCgSgBIgZAAg");
	this.shape_60.setTransform(164.5,367.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000099").s().p("AAcA0IAAgpIgKAAQgJAAgEADQgFACgIANIgPAXIgWAAIATgcQAJgNAIgCQgPgCgHgHQgHgJAAgMQAAgNAJgJQAJgIATAAIAvAAIAABngAgQggQgEAFAAAHQgBAJAIAFQAGAEAQAAIATAAIAAgiIgYAAQgQAAgEAEg");
	this.shape_61.setTransform(239.2,338.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_62.setTransform(228.7,338.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000099").s().p("AgdA0IAAhnIA7AAIAAAPIgpAAIAABYg");
	this.shape_63.setTransform(220.2,338.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000099").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_64.setTransform(210.3,338.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000099").s().p("AgpA0IAAhnIAoAAQAOAAAHADQAIACAEAHQAGAGAAAKQAAAHgEAGQgCAFgHAEQAIABAFAHQAEAHAAAJQAAAOgKAIQgJAHgTAAgAgYAlIAXAAQAOAAAFgDQAGgEAAgIQAAgFgDgEQgDgFgFgBIgQgBIgVAAgAgYgHIATAAIAOgBQAEgCADgDQAEgEAAgFQAAgIgGgDQgGgDgNAAIgTAAg");
	this.shape_65.setTransform(199.7,338.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000099").s().p("AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAJAAQANAAAKAHQALAHAFAMQAFANAAAPQAAAQgFALQgGANgLAHQgLAHgMAAQgIAAgGgEQgIgEgEgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAJAJALAAQALAAAIgKQAJgKgBgTQABgUgJgKQgIgKgLAAQgLAAgIALg");
	this.shape_66.setTransform(188.8,340);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000099").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_67.setTransform(177.4,338.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000099").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiNIATAAIAAA6IBJAAIAAg6IATAAIAACNg");
	this.shape_68.setTransform(164.7,336.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000099").s().p("AAdA0IAAgpIgLAAQgJAAgEADQgFACgIANIgPAXIgWAAIATgcQAJgNAIgCQgPgCgHgHQgHgJgBgMQABgNAJgJQAJgIATAAIAvAAIAABngAgQggQgEAFgBAHQAAAJAIAFQAGAEAQAAIAUAAIAAgiIgZAAQgQAAgEAEg");
	this.shape_69.setTransform(240.7,308.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_70.setTransform(230.2,308.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000099").s().p("AAYA0IAAguIgvAAIAAAuIgSAAIAAhnIASAAIAAArIAvAAIAAgrIASAAIAABng");
	this.shape_71.setTransform(219.1,308.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000099").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_72.setTransform(207.9,308.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000099").s().p("AAmA0IAAhTIgfBTIgPAAIgdhXIAABXIgRAAIAAhnIAbAAIAbBSIAehSIAZAAIAABng");
	this.shape_73.setTransform(195.6,308.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000099").s().p("AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAJAAQANAAAKAHQALAHAFAMQAFANAAAPQAAAQgFALQgGANgLAHQgLAHgMAAQgIAAgGgEQgIgEgEgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAJAJALAAQALAAAIgKQAJgKgBgTQABgUgJgKQgIgKgLAAQgLAAgIALg");
	this.shape_74.setTransform(183.4,310.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000099").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_75.setTransform(172,308.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000099").s().p("AgtBIIAAiOIBcAAIAAAQIhJAAIAAB+g");
	this.shape_76.setTransform(161.9,306.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000099").s().p("AAdA0IAAgpIgLAAQgJAAgFADQgEACgIANIgPAXIgWAAIATgcQAJgNAJgCQgQgCgHgHQgIgJAAgMQAAgNAKgJQAJgIATAAIAvAAIAABngAgQggQgEAFgBAHQAAAJAHAFQAHAEAQAAIAUAAIAAgiIgZAAQgPAAgFAEg");
	this.shape_77.setTransform(258.4,276.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_78.setTransform(247.9,276.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000099").s().p("AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAKAAQAMAAAKAHQALAHAFAMQAFANAAAPQAAAQgFALQgGANgLAHQgLAHgMAAQgIAAgGgEQgIgEgEgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAIAJAMAAQAKAAAJgKQAJgKgBgTQABgUgJgKQgIgKgLAAQgKAAgJALg");
	this.shape_79.setTransform(237.1,278);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000099").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_80.setTransform(225.6,276.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000099").s().p("AAhBCIAAgdIhPAAIAAhmIARAAIAABXIAvAAIAAhXIASAAIAABXIALAAIAAAsg");
	this.shape_81.setTransform(214.8,277.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000099").s().p("AAZBIIAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABngAgRgzQgIgHgBgMIAMAAQABAGAEAEQAEACAGAAQAIAAAEgCQAEgDABgHIAMAAQgBALgHAIQgIAGgMAAQgMAAgHgGg");
	this.shape_82.setTransform(203.1,274.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000099").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_83.setTransform(192,276.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000099").s().p("AgqA0IAAhnIApAAQAOAAAHADQAHACAGAHQAFAGAAAKQAAAHgDAGQgEAFgFAEQAHABAEAHQAGAHAAAJQgBAOgKAIQgKAHgSAAgAgYAlIAXAAQAOAAAFgDQAGgEABgIQgBgFgDgEQgDgFgFgBIgQgBIgVAAgAgYgHIASAAIAPgBQAEgCAEgDQADgEAAgFQAAgIgGgDQgFgDgOAAIgTAAg");
	this.shape_84.setTransform(181.4,276.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000099").s().p("AhLBIIAAiOIATAAIAAB9IAwAAIAAh9IASAAIAAB9IAvAAIAAh9IATAAIAACOg");
	this.shape_85.setTransform(166.6,274.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000099").s().p("AAcA0IAAgpIgKAAQgJAAgEADQgFACgIANIgPAXIgWAAIATgcQAIgNAKgCQgQgCgHgHQgIgJABgMQAAgNAJgJQAKgIASAAIAvAAIAABngAgQggQgFAFABAHQAAAJAGAFQAHAEAQAAIATAAIAAgiIgZAAQgPAAgEAEg");
	this.shape_86.setTransform(208,241.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_87.setTransform(197.5,241.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000099").s().p("AAbA0IgVggIgGgJIgaApIgVAAIAlg1IgjgyIAXAAIAPAYIAHAMIAHgLIASgZIAVAAIgkAxIAnA2g");
	this.shape_88.setTransform(186.9,241.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000099").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_89.setTransform(176.3,241.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000099").s().p("AAkBIIAAg6QgaAKgSAAQgPgBgMgGQgLgIgEgJQgDgLAAgRIAAgrIASAAIAAApQABAXAIAHQAIAHAMAAQAUAAAWgIIAAhGIASAAIAACPg");
	this.shape_90.setTransform(163.8,239.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000099").s().p("AAtBIIgQgsIg7AAIgQAsIgUAAIA3iOIATAAIA7COgAgJgdIgQApIAwAAIgPgmIgJgeQgDAOgFANg");
	this.shape_91.setTransform(196.9,208.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000099").s().p("AhLBIIAAiOIATAAIAAB9IAvAAIAAh9IASAAIAAB9IAwAAIAAh9IATAAIAACOg");
	this.shape_92.setTransform(181.1,208.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000099").s().p("AghBBQgOgKgIgSQgHgRAAgUQAAgXAIgQQAJgRAQgJQAPgIASAAQAWAAAOALQAPALAGATIgTAFQgFgQgJgHQgKgHgOAAQgQAAgLAIQgLAIgEAOQgFANAAAOQAAARAGANQAFAOALAHQALAGAMAAQAQABALgKQALgJAEgSIATAFQgGAYgPAMQgQAMgWAAQgWAAgPgJg");
	this.shape_93.setTransform(164.8,208.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000099").s().p("AAcA0IAAgpIgKAAQgJAAgEADQgFACgIANIgPAXIgWAAIATgcQAIgNAKgCQgQgCgHgHQgIgJABgMQAAgNAJgJQAKgIASAAIAvAAIAABngAgQggQgFAFABAHQAAAJAGAFQAHAEAQAAIATAAIAAgiIgZAAQgPAAgEAEg");
	this.shape_94.setTransform(254.3,181.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_95.setTransform(243.8,181.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000099").s().p("AApBCIAAgdIhRAAIAAAdIgOAAIAAgsIAJAAQATgYgBhAIBHAAIAABYIALAAIAAAsgAgcAWIA3AAIAAhJIgoAAQgCAygNAXg");
	this.shape_96.setTransform(232.1,182.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000099").s().p("AAYA0IAAguIgvAAIAAAuIgSAAIAAhnIASAAIAAArIAvAAIAAgrIASAAIAABng");
	this.shape_97.setTransform(221.1,181.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000099").s().p("AAdA0IAAgpIgLAAQgJAAgEADQgFACgIANIgPAXIgWAAIATgcQAJgNAIgCQgPgCgHgHQgHgJgBgMQAAgNAKgJQAJgIATAAIAvAAIAABngAgQggQgEAFgBAHQAAAJAIAFQAGAEAQAAIAUAAIAAgiIgZAAQgQAAgEAEg");
	this.shape_98.setTransform(209.6,181.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000099").s().p("AgxAzIAAgOIAHAAQAGAAACgCQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQABgDAAgNIAAhDIBQAAIAABmIgRAAIAAhYIgtAAIAAAzQgBASgBAGQgBAGgGAEQgEAEgLAAIgNgBg");
	this.shape_99.setTransform(198.4,181.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000099").s().p("AAYA0IAAguIgvAAIAAAuIgSAAIAAhnIASAAIAAArIAvAAIAAgrIASAAIAABng");
	this.shape_100.setTransform(187.5,181.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_101.setTransform(176.4,181.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000099").s().p("AgIBIIAAgSQgZgBgRgPQgRgOAAgYQAAgXARgOQAQgPAagBIAAgSIARAAIAAASQAcACAPAPQAQAPAAAVQAAAWgQAPQgPAPgcACIAAASgAAJAlQASAAALgKQALgKAAgRQAAgQgLgKQgLgJgSgCgAglgaQgLAKAAAQQAAARALAKQALAKASAAIAAhJQgRAAgMAKg");
	this.shape_102.setTransform(163.3,179.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000099").s().p("AAcA0IAAgpIgKAAQgJAAgEADQgFACgIANIgPAXIgWAAIATgcQAIgNAKgCQgQgCgHgHQgIgJABgMQAAgNAJgJQAKgIASAAIAvAAIAABngAgQggQgFAFABAHQAAAJAGAFQAHAEAQAAIATAAIAAgiIgZAAQgPAAgEAEg");
	this.shape_103.setTransform(223.3,151.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_104.setTransform(212.8,151.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000099").s().p("AAhBCIAAgdIhQAAIAAhnIASAAIAABYIAvAAIAAhYIASAAIAABYIAMAAIAAAsg");
	this.shape_105.setTransform(201.9,153.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000099").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_106.setTransform(190.2,151.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000099").s().p("AgqA0IAAhnIApAAQAOAAAHADQAHACAGAHQAFAGAAAKQAAAHgDAGQgEAFgFAEQAHABAEAHQAGAHAAAJQgBAOgKAIQgKAHgSAAgAgYAlIAXAAQAOAAAFgDQAGgEABgIQgBgFgDgEQgDgFgFgBIgQgBIgVAAgAgYgHIASAAIAPgBQAEgCAEgDQADgEAAgFQAAgIgGgDQgFgDgOAAIgTAAg");
	this.shape_107.setTransform(179.6,151.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000099").s().p("AhLBHIAAiOIATAAIAAB9IAwAAIAAh9IASAAIAAB9IAvAAIAAh9IATAAIAACOg");
	this.shape_108.setTransform(164.8,149.8);

	this.instance_3 = new lib.France();
	this.instance_3.parent = this;
	this.instance_3.setTransform(107,447,0.5,0.5);

	this.instance_4 = new lib.Latvia();
	this.instance_4.parent = this;
	this.instance_4.setTransform(107,414,0.5,0.5);

	this.instance_5 = new lib.Slovakia();
	this.instance_5.parent = this;
	this.instance_5.setTransform(107,383,0.5,0.5);

	this.instance_6 = new lib.Belarus();
	this.instance_6.parent = this;
	this.instance_6.setTransform(107,351,0.5,0.5);

	this.instance_7 = new lib.Norway();
	this.instance_7.parent = this;
	this.instance_7.setTransform(107,320,0.5,0.5);

	this.instance_8 = new lib.Germany();
	this.instance_8.parent = this;
	this.instance_8.setTransform(107,289,0.5,0.5);

	this.instance_9 = new lib.Switzerland();
	this.instance_9.parent = this;
	this.instance_9.setTransform(107,257,0.5,0.5);

	this.instance_10 = new lib.Czech();
	this.instance_10.parent = this;
	this.instance_10.setTransform(107,226,0.5,0.5);

	this.instance_11 = new lib.USA();
	this.instance_11.parent = this;
	this.instance_11.setTransform(107,191,0.5,0.5);

	this.instance_12 = new lib.Finland();
	this.instance_12.parent = this;
	this.instance_12.setTransform(107,163,0.5,0.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000099").s().p("AAdA0IAAgpIgLAAQgJAAgEADQgFACgIANIgPAXIgWAAIATgcQAJgNAIgCQgPgCgHgHQgHgJgBgMQAAgNAKgJQAJgIATAAIAvAAIAABngAgQggQgEAFgBAHQAAAJAIAFQAGAEAQAAIAUAAIAAgiIgZAAQgQAAgEAEg");
	this.shape_109.setTransform(216.4,120.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000099").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_110.setTransform(205.9,120.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000099").s().p("AgfAoQgNgOAAgaQAAgQAFgMQAGgNALgGQAMgGAMAAQARAAAKAIQALAJAEAQIgRACQgDgKgGgGQgHgFgIAAQgMAAgJAKQgIAJAAAUQAAAVAIAJQAIAKAMAAQAKAAAHgHQAHgGACgNIARACQgDASgMAKQgLAKgRAAQgUAAgNgOg");
	this.shape_111.setTransform(195.6,120.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000099").s().p("AgfAoQgNgOAAgaQAAgQAFgMQAGgNALgGQALgGANAAQARAAALAIQAKAJAEAQIgRACQgDgKgGgGQgGgFgJAAQgMAAgJAKQgIAJAAAUQAAAVAIAJQAIAKAMAAQAKAAAHgHQAHgGACgNIARACQgCASgNAKQgLAKgRAAQgUAAgNgOg");
	this.shape_112.setTransform(185.6,120.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000099").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_113.setTransform(174.7,120.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000099").s().p("Ag1BIIAAiPIA1AAIAVABQALADAHAFQAHAEAFAJQADAJABALQgBASgLALQgMANgeAAIgjAAIAAA7gAgigCIAjAAQASgBAIgGQAIgHAAgMQAAgJgFgHQgEgGgIgCQgEgCgNAAIgjAAg");
	this.shape_114.setTransform(162.9,118.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000099").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_115.setTransform(217.7,86.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000099").s().p("AApBCIAAgdIhRAAIAAAdIgOAAIAAgsIAJAAQATgYgBhAIBHAAIAABYIALAAIAAAsgAgcAWIA3AAIAAhJIgoAAQgCAygNAXg");
	this.shape_116.setTransform(206.1,88.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000099").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_117.setTransform(194.9,86.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000099").s().p("AAYA0IAAguIgvAAIAAAuIgSAAIAAhnIASAAIAAArIAvAAIAAgrIASAAIAABng");
	this.shape_118.setTransform(183.9,86.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000099").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_119.setTransform(172.8,86.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000099").s().p("AAbBIIgYgnQgJgQgHgGQgHgGgKAAIAABDIgTAAIAAiOIATAAIAAA+QANAAAFgFQAFgFAIgTQAGgOAEgGQADgGAHgEQAIgEAIAAIAMABIAAAQIgEAAIgEAAQgJAAgEAEQgFAFgGAOQgHASgFAFQgFAFgGADQANACAOAWIAdAwg");
	this.shape_120.setTransform(162.2,84.8);

	this.instance_13 = new lib.Sweden();
	this.instance_13.parent = this;
	this.instance_13.setTransform(107,132,0.5,0.5);

	this.instance_14 = new lib.Russia();
	this.instance_14.parent = this;
	this.instance_14.setTransform(107,101,0.5,0.5);

	this.instance_15 = new lib.Canada();
	this.instance_15.parent = this;
	this.instance_15.setTransform(107,69,0.5,0.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000044").ss(0.3,1,1).p("A8H/rMA4PAAAEgcHgkvMA4PAAAA8H6uMA4PAAAA8H14MA4PAAAA8HxBMA4PAAAA8HsCMA4PAAAA8HnMMA4PAAAA8HiPMA4PAAAA8HCjMA4PAAAA8HHfMA4PAAAA8HMcMA4PAAAA8HRfMA4PAAAA8HWZMA4PAAAA8HbfMA4PAAAEgcHAgVMA4PAAAEgcHAkwMA4PAAA");
	this.shape_121.setTransform(283,335.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000044").ss(0.1,1,1).p("AwsqXMAhZAAAQBQAAAABQIAASPQAABQhQAAMghZAAAQhQAAAAhQIAAyPQAAhQBQAAg");
	this.shape_122.setTransform(642.4,232.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0066FF").s().p("AwsKYQhQAAAAhQIAAyPQAAhQBQAAMAhZAAAQBQAAAABQIAASPQAABQhQAAg");
	this.shape_123.setTransform(642.4,232.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,102,204,0.298)").s().p("AUXKjIAAkoIACAAIAAEogA0YkMIAAmWIeuAAIAAGWg");
	this.shape_124.setTransform(398.2,98.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_2},{t:this.instance_1},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance}]},2).to({state:[]},1).wait(4));

	// столбцы
	this.stolbec_mr = new lib.stolbec_2_mr();
	this.stolbec_mr.parent = this;
	this.stolbec_mr.setTransform(300.1,301.3,1,1,0,0,0,33,270);

	this.st_ob = new lib.stolbec_2_oborona();
	this.st_ob.parent = this;
	this.st_ob.setTransform(430.4,301.3,1,1,0,0,0,33,270);

	this.st_att = new lib.stolbec_2_ataka();
	this.st_att.parent = this;
	this.st_att.setTransform(365.2,301.3,1,1,0,0,0,33,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.st_att},{t:this.st_ob},{t:this.stolbec_mr}]},2).to({state:[]},1).wait(4));

	// icon
	this.text_25 = new cjs.Text("о", "15px 'Times New Roman'");
	this.text_25.lineHeight = 19;
	this.text_25.lineWidth = 8;
	this.text_25.parent = this;
	this.text_25.setTransform(751,86);

	this.text_26 = new cjs.Text("о", "15px 'Times New Roman'");
	this.text_26.lineHeight = 19;
	this.text_26.lineWidth = 8;
	this.text_26.parent = this;
	this.text_26.setTransform(556.7,86.1);

	this.text_27 = new cjs.Text("о", "15px 'Times New Roman'");
	this.text_27.lineHeight = 19;
	this.text_27.lineWidth = 8;
	this.text_27.parent = this;
	this.text_27.setTransform(356.1,86);

	this.text_28 = new cjs.Text("о", "15px 'Times New Roman'");
	this.text_28.lineHeight = 19;
	this.text_28.lineWidth = 8;
	this.text_28.parent = this;
	this.text_28.setTransform(198.9,85.4);

	this.text_29 = new cjs.Text("2018", "15px 'Times New Roman'");
	this.text_29.lineHeight = 19;
	this.text_29.lineWidth = 34;
	this.text_29.parent = this;
	this.text_29.setTransform(741,75.6);

	this.text_30 = new cjs.Text("2017", "15px 'Times New Roman'");
	this.text_30.lineHeight = 19;
	this.text_30.lineWidth = 34;
	this.text_30.parent = this;
	this.text_30.setTransform(703,75.6);

	this.text_31 = new cjs.Text("2016", "15px 'Times New Roman'");
	this.text_31.lineHeight = 19;
	this.text_31.lineWidth = 34;
	this.text_31.parent = this;
	this.text_31.setTransform(663,75.6);

	this.text_32 = new cjs.Text("2015", "15px 'Times New Roman'");
	this.text_32.lineHeight = 19;
	this.text_32.lineWidth = 34;
	this.text_32.parent = this;
	this.text_32.setTransform(624,75.6);

	this.text_33 = new cjs.Text("2014", "15px 'Times New Roman'");
	this.text_33.lineHeight = 19;
	this.text_33.lineWidth = 34;
	this.text_33.parent = this;
	this.text_33.setTransform(584,75.6);

	this.text_34 = new cjs.Text("2014", "15px 'Times New Roman'");
	this.text_34.lineHeight = 19;
	this.text_34.lineWidth = 34;
	this.text_34.parent = this;
	this.text_34.setTransform(545.5,75.6);

	this.text_35 = new cjs.Text("2013", "15px 'Times New Roman'");
	this.text_35.lineHeight = 19;
	this.text_35.lineWidth = 34;
	this.text_35.parent = this;
	this.text_35.setTransform(506,75.6);

	this.text_36 = new cjs.Text("2012", "15px 'Times New Roman'");
	this.text_36.lineHeight = 19;
	this.text_36.lineWidth = 34;
	this.text_36.parent = this;
	this.text_36.setTransform(465,75.6);

	this.text_37 = new cjs.Text("2011", "15px 'Times New Roman'");
	this.text_37.lineHeight = 19;
	this.text_37.lineWidth = 34;
	this.text_37.parent = this;
	this.text_37.setTransform(425,75.6);

	this.text_38 = new cjs.Text("2010", "15px 'Times New Roman'");
	this.text_38.lineHeight = 19;
	this.text_38.lineWidth = 34;
	this.text_38.parent = this;
	this.text_38.setTransform(386,75.6);

	this.text_39 = new cjs.Text("2010", "15px 'Times New Roman'");
	this.text_39.lineHeight = 19;
	this.text_39.lineWidth = 34;
	this.text_39.parent = this;
	this.text_39.setTransform(347,75.6);

	this.text_40 = new cjs.Text("2009", "15px 'Times New Roman'");
	this.text_40.lineHeight = 19;
	this.text_40.lineWidth = 34;
	this.text_40.parent = this;
	this.text_40.setTransform(307,75.6);

	this.text_41 = new cjs.Text("2008", "15px 'Times New Roman'");
	this.text_41.lineHeight = 19;
	this.text_41.lineWidth = 34;
	this.text_41.parent = this;
	this.text_41.setTransform(267,75.6);

	this.text_42 = new cjs.Text("2007", "15px 'Times New Roman'");
	this.text_42.lineHeight = 19;
	this.text_42.lineWidth = 34;
	this.text_42.parent = this;
	this.text_42.setTransform(227,75.6);

	this.text_43 = new cjs.Text("2006", "15px 'Times New Roman'");
	this.text_43.lineHeight = 19;
	this.text_43.lineWidth = 34;
	this.text_43.parent = this;
	this.text_43.setTransform(188,75.6);

	this.text_44 = new cjs.Text("2006", "15px 'Times New Roman'");
	this.text_44.lineHeight = 19;
	this.text_44.lineWidth = 34;
	this.text_44.parent = this;
	this.text_44.setTransform(149,75.6);

	this.text_45 = new cjs.Text("2005", "15px 'Times New Roman'");
	this.text_45.lineHeight = 19;
	this.text_45.lineWidth = 34;
	this.text_45.parent = this;
	this.text_45.setTransform(108,75.6);

	this.text_46 = new cjs.Text("2004", "15px 'Times New Roman'");
	this.text_46.lineHeight = 19;
	this.text_46.lineWidth = 34;
	this.text_46.parent = this;
	this.text_46.setTransform(69,75.6);

	this.text_47 = new cjs.Text("2003", "15px 'Times New Roman'");
	this.text_47.lineHeight = 19;
	this.text_47.lineWidth = 34;
	this.text_47.parent = this;
	this.text_47.setTransform(31,75.6);

	this.instance_16 = new lib.Norway();
	this.instance_16.parent = this;
	this.instance_16.setTransform(739,430,0.5,0.5);

	this.instance_17 = new lib.Norway();
	this.instance_17.parent = this;
	this.instance_17.setTransform(701,430,0.5,0.5);

	this.instance_18 = new lib.Norway();
	this.instance_18.parent = this;
	this.instance_18.setTransform(581,471,0.5,0.5);

	this.instance_19 = new lib.Norway();
	this.instance_19.parent = this;
	this.instance_19.setTransform(542,430,0.5,0.5);

	this.instance_20 = new lib.Norway();
	this.instance_20.parent = this;
	this.instance_20.setTransform(504,430,0.5,0.5);

	this.instance_21 = new lib.Norway();
	this.instance_21.parent = this;
	this.instance_21.setTransform(464,389,0.5,0.5);

	this.instance_22 = new lib.Belarus();
	this.instance_22.parent = this;
	this.instance_22.setTransform(701,471,0.5,0.5);

	this.instance_23 = new lib.Belarus();
	this.instance_23.parent = this;
	this.instance_23.setTransform(661,430,0.5,0.5);

	this.instance_24 = new lib.Belarus();
	this.instance_24.parent = this;
	this.instance_24.setTransform(622,430,0.5,0.5);

	this.instance_25 = new lib.Belarus();
	this.instance_25.parent = this;
	this.instance_25.setTransform(383,471,0.5,0.5);

	this.instance_26 = new lib.Belarus();
	this.instance_26.parent = this;
	this.instance_26.setTransform(344,430,0.5,0.5);

	this.instance_27 = new lib.Belarus();
	this.instance_27.parent = this;
	this.instance_27.setTransform(305,391,0.5,0.5);

	this.instance_28 = new lib.Belarus();
	this.instance_28.parent = this;
	this.instance_28.setTransform(265,430,0.5,0.5);

	this.instance_29 = new lib.Belarus();
	this.instance_29.parent = this;
	this.instance_29.setTransform(225,430,0.5,0.5);

	this.instance_30 = new lib.Latvia();
	this.instance_30.parent = this;
	this.instance_30.setTransform(622,470,0.5,0.5);

	this.instance_31 = new lib.Latvia();
	this.instance_31.parent = this;
	this.instance_31.setTransform(581,430,0.5,0.5);

	this.instance_32 = new lib.Latvia();
	this.instance_32.parent = this;
	this.instance_32.setTransform(542,469,0.5,0.5);

	this.instance_33 = new lib.Latvia();
	this.instance_33.parent = this;
	this.instance_33.setTransform(344,469,0.5,0.5);

	this.instance_34 = new lib.Latvia();
	this.instance_34.parent = this;
	this.instance_34.setTransform(305,469,0.5,0.5);

	this.instance_35 = new lib.Latvia();
	this.instance_35.parent = this;
	this.instance_35.setTransform(225,471,0.5,0.5);

	this.instance_36 = new lib.Latvia();
	this.instance_36.parent = this;
	this.instance_36.setTransform(186,430,0.5,0.5);

	this.instance_37 = new lib.Latvia();
	this.instance_37.parent = this;
	this.instance_37.setTransform(147,430,0.5,0.5);

	this.instance_38 = new lib.Latvia();
	this.instance_38.parent = this;
	this.instance_38.setTransform(107,430,0.5,0.5);

	this.instance_39 = new lib.Switzerland();
	this.instance_39.parent = this;
	this.instance_39.setTransform(739,389,0.5,0.5);

	this.instance_40 = new lib.Switzerland();
	this.instance_40.parent = this;
	this.instance_40.setTransform(701,349,0.5,0.5);

	this.instance_41 = new lib.Switzerland();
	this.instance_41.parent = this;
	this.instance_41.setTransform(661,348,0.5,0.5);

	this.instance_42 = new lib.Switzerland();
	this.instance_42.parent = this;
	this.instance_42.setTransform(622,349,0.5,0.5);

	this.instance_43 = new lib.Switzerland();
	this.instance_43.parent = this;
	this.instance_43.setTransform(581,349,0.5,0.5);

	this.instance_44 = new lib.Switzerland();
	this.instance_44.parent = this;
	this.instance_44.setTransform(542,348,0.5,0.5);

	this.instance_45 = new lib.Switzerland();
	this.instance_45.parent = this;
	this.instance_45.setTransform(503,349,0.5,0.5);

	this.instance_46 = new lib.Switzerland();
	this.instance_46.parent = this;
	this.instance_46.setTransform(464,430,0.5,0.5);

	this.instance_47 = new lib.Switzerland();
	this.instance_47.parent = this;
	this.instance_47.setTransform(423,348,0.5,0.5);

	this.instance_48 = new lib.Switzerland();
	this.instance_48.parent = this;
	this.instance_48.setTransform(384,348,0.5,0.5);

	this.instance_49 = new lib.Switzerland();
	this.instance_49.parent = this;
	this.instance_49.setTransform(345,389,0.5,0.5);

	this.instance_50 = new lib.Switzerland();
	this.instance_50.parent = this;
	this.instance_50.setTransform(305,348,0.5,0.5);

	this.instance_51 = new lib.Switzerland();
	this.instance_51.parent = this;
	this.instance_51.setTransform(265,348,0.5,0.5);

	this.instance_52 = new lib.Switzerland();
	this.instance_52.parent = this;
	this.instance_52.setTransform(226,389,0.5,0.5);

	this.instance_53 = new lib.Switzerland();
	this.instance_53.parent = this;
	this.instance_53.setTransform(186,389,0.5,0.5);

	this.instance_54 = new lib.Switzerland();
	this.instance_54.parent = this;
	this.instance_54.setTransform(147,389,0.5,0.5);

	this.instance_55 = new lib.Switzerland();
	this.instance_55.parent = this;
	this.instance_55.setTransform(107,389,0.5,0.5);

	this.instance_56 = new lib.Germany();
	this.instance_56.parent = this;
	this.instance_56.setTransform(739,348,0.5,0.5);

	this.instance_57 = new lib.Germany();
	this.instance_57.parent = this;
	this.instance_57.setTransform(701,391,0.5,0.5);

	this.instance_58 = new lib.Germany();
	this.instance_58.parent = this;
	this.instance_58.setTransform(661,471,0.5,0.5);

	this.instance_59 = new lib.Germany();
	this.instance_59.parent = this;
	this.instance_59.setTransform(504,470,0.5,0.5);

	this.instance_60 = new lib.Germany();
	this.instance_60.parent = this;
	this.instance_60.setTransform(463,471,0.5,0.5);

	this.instance_61 = new lib.Germany();
	this.instance_61.parent = this;
	this.instance_61.setTransform(423,390,0.5,0.5);

	this.instance_62 = new lib.Germany();
	this.instance_62.parent = this;
	this.instance_62.setTransform(383,430,0.5,0.5);

	this.instance_63 = new lib.Germany();
	this.instance_63.parent = this;
	this.instance_63.setTransform(265,471,0.5,0.5);

	this.instance_64 = new lib.Germany();
	this.instance_64.parent = this;
	this.instance_64.setTransform(148,471,0.5,0.5);

	this.instance_65 = new lib.Germany();
	this.instance_65.parent = this;
	this.instance_65.setTransform(106,471,0.5,0.5);

	this.instance_66 = new lib.Russia();
	this.instance_66.parent = this;
	this.instance_66.setTransform(739,144,0.5,0.5);

	this.instance_67 = new lib.Russia();
	this.instance_67.parent = this;
	this.instance_67.setTransform(701,144,0.5,0.5);

	this.instance_68 = new lib.Russia();
	this.instance_68.parent = this;
	this.instance_68.setTransform(661,144,0.5,0.5);

	this.instance_69 = new lib.Russia();
	this.instance_69.parent = this;
	this.instance_69.setTransform(622,144,0.5,0.5);

	this.instance_70 = new lib.Russia();
	this.instance_70.parent = this;
	this.instance_70.setTransform(581,184,0.5,0.5);

	this.instance_71 = new lib.Russia();
	this.instance_71.parent = this;
	this.instance_71.setTransform(542,184,0.5,0.5);

	this.instance_72 = new lib.Russia();
	this.instance_72.parent = this;
	this.instance_72.setTransform(504,184,0.5,0.5);

	this.instance_73 = new lib.Russia();
	this.instance_73.parent = this;
	this.instance_73.setTransform(463,104,0.5,0.5);

	this.instance_74 = new lib.Russia();
	this.instance_74.parent = this;
	this.instance_74.setTransform(423,103,0.5,0.5);

	this.instance_75 = new lib.Russia();
	this.instance_75.parent = this;
	this.instance_75.setTransform(383,103,0.5,0.5);

	this.instance_76 = new lib.Russia();
	this.instance_76.parent = this;
	this.instance_76.setTransform(344,144,0.5,0.5);

	this.instance_77 = new lib.Russia();
	this.instance_77.parent = this;
	this.instance_77.setTransform(305,103,0.5,0.5);

	this.instance_78 = new lib.Russia();
	this.instance_78.parent = this;
	this.instance_78.setTransform(265,144,0.5,0.5);

	this.instance_79 = new lib.Russia();
	this.instance_79.parent = this;
	this.instance_79.setTransform(225,266,0.5,0.5);

	this.instance_80 = new lib.Russia();
	this.instance_80.parent = this;
	this.instance_80.setTransform(186,266,0.5,0.5);

	this.instance_81 = new lib.Russia();
	this.instance_81.parent = this;
	this.instance_81.setTransform(148,307,0.5,0.5);

	this.instance_82 = new lib.Russia();
	this.instance_82.parent = this;
	this.instance_82.setTransform(106,266,0.5,0.5);

	this.instance_83 = new lib.USA();
	this.instance_83.parent = this;
	this.instance_83.setTransform(739,307,0.5,0.5);

	this.instance_84 = new lib.USA();
	this.instance_84.parent = this;
	this.instance_84.setTransform(701,268,0.5,0.5);

	this.instance_85 = new lib.USA();
	this.instance_85.parent = this;
	this.instance_85.setTransform(661,225,0.5,0.5);

	this.instance_86 = new lib.USA();
	this.instance_86.parent = this;
	this.instance_86.setTransform(622,268,0.5,0.5);

	this.instance_87 = new lib.USA();
	this.instance_87.parent = this;
	this.instance_87.setTransform(581,311,0.5,0.5);

	this.instance_88 = new lib.USA();
	this.instance_88.parent = this;
	this.instance_88.setTransform(542,311,0.5,0.5);

	this.instance_89 = new lib.USA();
	this.instance_89.parent = this;
	this.instance_89.setTransform(504,311,0.5,0.5);

	this.instance_90 = new lib.USA();
	this.instance_90.parent = this;
	this.instance_90.setTransform(462,349,0.5,0.5);

	this.instance_91 = new lib.USA();
	this.instance_91.parent = this;
	this.instance_91.setTransform(423,307,0.5,0.5);

	this.instance_92 = new lib.USA();
	this.instance_92.parent = this;
	this.instance_92.setTransform(383,307,0.5,0.5);

	this.instance_93 = new lib.USA();
	this.instance_93.parent = this;
	this.instance_93.setTransform(344,268,0.5,0.5);

	this.instance_94 = new lib.USA();
	this.instance_94.parent = this;
	this.instance_94.setTransform(305,268,0.5,0.5);

	this.instance_95 = new lib.USA();
	this.instance_95.parent = this;
	this.instance_95.setTransform(265,307,0.5,0.5);

	this.instance_96 = new lib.USA();
	this.instance_96.parent = this;
	this.instance_96.setTransform(225,349,0.5,0.5);

	this.instance_97 = new lib.USA();
	this.instance_97.parent = this;
	this.instance_97.setTransform(186,349,0.5,0.5);

	this.instance_98 = new lib.USA();
	this.instance_98.parent = this;
	this.instance_98.setTransform(148,349,0.5,0.5);

	this.instance_99 = new lib.USA();
	this.instance_99.parent = this;
	this.instance_99.setTransform(106,307,0.5,0.5);

	this.instance_100 = new lib.Finland();
	this.instance_100.parent = this;
	this.instance_100.setTransform(739,225,0.5,0.5);

	this.instance_101 = new lib.Finland();
	this.instance_101.parent = this;
	this.instance_101.setTransform(701,225,0.5,0.5);

	this.instance_102 = new lib.Finland();
	this.instance_102.parent = this;
	this.instance_102.setTransform(661,184,0.5,0.5);

	this.instance_103 = new lib.Finland();
	this.instance_103.parent = this;
	this.instance_103.setTransform(622,225,0.5,0.5);

	this.instance_104 = new lib.Finland();
	this.instance_104.parent = this;
	this.instance_104.setTransform(581,144,0.5,0.5);

	this.instance_105 = new lib.Finland();
	this.instance_105.parent = this;
	this.instance_105.setTransform(542,144,0.5,0.5);

	this.instance_106 = new lib.Finland();
	this.instance_106.parent = this;
	this.instance_106.setTransform(504,144,0.5,0.5);

	this.instance_107 = new lib.Finland();
	this.instance_107.parent = this;
	this.instance_107.setTransform(462,144,0.5,0.5);

	this.instance_108 = new lib.Finland();
	this.instance_108.parent = this;
	this.instance_108.setTransform(423,184,0.5,0.5);

	this.instance_109 = new lib.Finland();
	this.instance_109.parent = this;
	this.instance_109.setTransform(383,225,0.5,0.5);

	this.instance_110 = new lib.Finland();
	this.instance_110.parent = this;
	this.instance_110.setTransform(344,184,0.5,0.5);

	this.instance_111 = new lib.Finland();
	this.instance_111.parent = this;
	this.instance_111.setTransform(305,225,0.5,0.5);

	this.instance_112 = new lib.Finland();
	this.instance_112.parent = this;
	this.instance_112.setTransform(265,225,0.5,0.5);

	this.instance_113 = new lib.Finland();
	this.instance_113.parent = this;
	this.instance_113.setTransform(225,184,0.5,0.5);

	this.instance_114 = new lib.Finland();
	this.instance_114.parent = this;
	this.instance_114.setTransform(186,225,0.5,0.5);

	this.instance_115 = new lib.Finland();
	this.instance_115.parent = this;
	this.instance_115.setTransform(148,268,0.5,0.5);

	this.instance_116 = new lib.Finland();
	this.instance_116.parent = this;
	this.instance_116.setTransform(106,349,0.5,0.5);

	this.instance_117 = new lib.Czech();
	this.instance_117.parent = this;
	this.instance_117.setTransform(739,268,0.5,0.5);

	this.instance_118 = new lib.Czech();
	this.instance_118.parent = this;
	this.instance_118.setTransform(701,307,0.5,0.5);

	this.instance_119 = new lib.Czech();
	this.instance_119.parent = this;
	this.instance_119.setTransform(661,307,0.5,0.5);

	this.instance_120 = new lib.Czech();
	this.instance_120.parent = this;
	this.instance_120.setTransform(622,307,0.5,0.5);

	this.instance_121 = new lib.Czech();
	this.instance_121.parent = this;
	this.instance_121.setTransform(581,268,0.5,0.5);

	this.instance_122 = new lib.Czech();
	this.instance_122.parent = this;
	this.instance_122.setTransform(542,268,0.5,0.5);

	this.instance_123 = new lib.Czech();
	this.instance_123.parent = this;
	this.instance_123.setTransform(504,225,0.5,0.5);

	this.instance_124 = new lib.Czech();
	this.instance_124.parent = this;
	this.instance_124.setTransform(462,184,0.5,0.5);

	this.instance_125 = new lib.Czech();
	this.instance_125.parent = this;
	this.instance_125.setTransform(423,268,0.5,0.5);

	this.instance_126 = new lib.Czech();
	this.instance_126.parent = this;
	this.instance_126.setTransform(383,268,0.5,0.5);

	this.instance_127 = new lib.Czech();
	this.instance_127.parent = this;
	this.instance_127.setTransform(344,307,0.5,0.5);

	this.instance_128 = new lib.Czech();
	this.instance_128.parent = this;
	this.instance_128.setTransform(305,307,0.5,0.5);

	this.instance_129 = new lib.Czech();
	this.instance_129.parent = this;
	this.instance_129.setTransform(265,268,0.5,0.5);

	this.instance_130 = new lib.Czech();
	this.instance_130.parent = this;
	this.instance_130.setTransform(225,225,0.5,0.5);

	this.instance_131 = new lib.Czech();
	this.instance_131.parent = this;
	this.instance_131.setTransform(186,144,0.5,0.5);

	this.instance_132 = new lib.Czech();
	this.instance_132.parent = this;
	this.instance_132.setTransform(148,184,0.5,0.5);

	this.instance_133 = new lib.Czech();
	this.instance_133.parent = this;
	this.instance_133.setTransform(106,184,0.5,0.5);

	this.instance_134 = new lib.Slovakia();
	this.instance_134.parent = this;
	this.instance_134.setTransform(739,471,0.5,0.5);

	this.instance_135 = new lib.Slovakia();
	this.instance_135.parent = this;
	this.instance_135.setTransform(661,391,0.5,0.5);

	this.instance_136 = new lib.Slovakia();
	this.instance_136.parent = this;
	this.instance_136.setTransform(622,391,0.5,0.5);

	this.instance_137 = new lib.Slovakia();
	this.instance_137.parent = this;
	this.instance_137.setTransform(581,391,0.5,0.5);

	this.instance_138 = new lib.Slovakia();
	this.instance_138.parent = this;
	this.instance_138.setTransform(542,391,0.5,0.5);

	this.instance_139 = new lib.Slovakia();
	this.instance_139.parent = this;
	this.instance_139.setTransform(504,391,0.5,0.5);

	this.instance_140 = new lib.Slovakia();
	this.instance_140.parent = this;
	this.instance_140.setTransform(462,307,0.5,0.5);

	this.instance_141 = new lib.Slovakia();
	this.instance_141.parent = this;
	this.instance_141.setTransform(423,471,0.5,0.5);

	this.instance_142 = new lib.Slovakia();
	this.instance_142.parent = this;
	this.instance_142.setTransform(383,391,0.5,0.5);

	this.instance_143 = new lib.Slovakia();
	this.instance_143.parent = this;
	this.instance_143.setTransform(344,349,0.5,0.5);

	this.instance_144 = new lib.Slovakia();
	this.instance_144.parent = this;
	this.instance_144.setTransform(305,430,0.5,0.5);

	this.instance_145 = new lib.Slovakia();
	this.instance_145.parent = this;
	this.instance_145.setTransform(265,391,0.5,0.5);

	this.instance_146 = new lib.Slovakia();
	this.instance_146.parent = this;
	this.instance_146.setTransform(225,307,0.5,0.5);

	this.instance_147 = new lib.Slovakia();
	this.instance_147.parent = this;
	this.instance_147.setTransform(186,307,0.5,0.5);

	this.instance_148 = new lib.Slovakia();
	this.instance_148.parent = this;
	this.instance_148.setTransform(148,225,0.5,0.5);

	this.instance_149 = new lib.Slovakia();
	this.instance_149.parent = this;
	this.instance_149.setTransform(106,225,0.5,0.5);

	this.instance_150 = new lib.Sweden();
	this.instance_150.parent = this;
	this.instance_150.setTransform(661,267,0.5,0.5);

	this.instance_151 = new lib.Sweden();
	this.instance_151.parent = this;
	this.instance_151.setTransform(739,184,0.5,0.5);

	this.instance_152 = new lib.Sweden();
	this.instance_152.parent = this;
	this.instance_152.setTransform(701,184,0.5,0.5);

	this.instance_153 = new lib.Sweden();
	this.instance_153.parent = this;
	this.instance_153.setTransform(622,184,0.5,0.5);

	this.instance_154 = new lib.Sweden();
	this.instance_154.parent = this;
	this.instance_154.setTransform(581,103,0.5,0.5);

	this.instance_155 = new lib.Sweden();
	this.instance_155.parent = this;
	this.instance_155.setTransform(542,103,0.5,0.5);

	this.instance_156 = new lib.Sweden();
	this.instance_156.parent = this;
	this.instance_156.setTransform(504,103,0.5,0.5);

	this.instance_157 = new lib.Sweden();
	this.instance_157.parent = this;
	this.instance_157.setTransform(462,225,0.5,0.5);

	this.instance_158 = new lib.Sweden();
	this.instance_158.parent = this;
	this.instance_158.setTransform(423,144,0.5,0.5);

	this.instance_159 = new lib.Sweden();
	this.instance_159.parent = this;
	this.instance_159.setTransform(383,184,0.5,0.5);

	this.instance_160 = new lib.Sweden();
	this.instance_160.parent = this;
	this.instance_160.setTransform(344,225,0.5,0.5);

	this.instance_161 = new lib.Sweden();
	this.instance_161.parent = this;
	this.instance_161.setTransform(305,184,0.5,0.5);

	this.instance_162 = new lib.Sweden();
	this.instance_162.parent = this;
	this.instance_162.setTransform(265,184,0.5,0.5);

	this.instance_163 = new lib.Sweden();
	this.instance_163.parent = this;
	this.instance_163.setTransform(225,103,0.5,0.5);

	this.instance_164 = new lib.Sweden();
	this.instance_164.parent = this;
	this.instance_164.setTransform(186,103,0.5,0.5);

	this.instance_165 = new lib.Canada();
	this.instance_165.parent = this;
	this.instance_165.setTransform(739,103,0.5,0.5);

	this.instance_166 = new lib.Canada();
	this.instance_166.parent = this;
	this.instance_166.setTransform(701,103,0.5,0.5);

	this.instance_167 = new lib.Canada();
	this.instance_167.parent = this;
	this.instance_167.setTransform(661,103,0.5,0.5);

	this.instance_168 = new lib.Canada();
	this.instance_168.parent = this;
	this.instance_168.setTransform(622,103,0.5,0.5);

	this.instance_169 = new lib.Canada();
	this.instance_169.parent = this;
	this.instance_169.setTransform(581,225,0.5,0.5);

	this.instance_170 = new lib.Canada();
	this.instance_170.parent = this;
	this.instance_170.setTransform(542,225,0.5,0.5);

	this.instance_171 = new lib.Canada();
	this.instance_171.parent = this;
	this.instance_171.setTransform(504,268,0.5,0.5);

	this.instance_172 = new lib.Canada();
	this.instance_172.parent = this;
	this.instance_172.setTransform(462,268,0.5,0.5);

	this.instance_173 = new lib.Canada();
	this.instance_173.parent = this;
	this.instance_173.setTransform(423,225,0.5,0.5);

	this.instance_174 = new lib.Canada();
	this.instance_174.parent = this;
	this.instance_174.setTransform(383,144,0.5,0.5);

	this.instance_175 = new lib.Canada();
	this.instance_175.parent = this;
	this.instance_175.setTransform(305,144,0.5,0.5);

	this.instance_176 = new lib.Canada();
	this.instance_176.parent = this;
	this.instance_176.setTransform(186,184,0.5,0.5);

	this.instance_177 = new lib.Canada();
	this.instance_177.parent = this;
	this.instance_177.setTransform(225,144,0.5,0.5);

	this.instance_178 = new lib.Canada();
	this.instance_178.parent = this;
	this.instance_178.setTransform(148,144,0.5,0.5);

	this.instance_179 = new lib.Canada();
	this.instance_179.parent = this;
	this.instance_179.setTransform(344,103,0.5,0.5);

	this.instance_180 = new lib.Sweden();
	this.instance_180.parent = this;
	this.instance_180.setTransform(148,103,0.5,0.5);

	this.instance_181 = new lib.Canada();
	this.instance_181.parent = this;
	this.instance_181.setTransform(265,103,0.5,0.5);

	this.instance_182 = new lib.Sweden();
	this.instance_182.parent = this;
	this.instance_182.setTransform(106,144,0.5,0.5);

	this.instance_183 = new lib.Canada();
	this.instance_183.parent = this;
	this.instance_183.setTransform(106,103,0.5,0.5);

	this.instance_184 = new lib.Latvia();
	this.instance_184.parent = this;
	this.instance_184.setTransform(67,471,0.5,0.5);

	this.instance_185 = new lib.Slovakia();
	this.instance_185.parent = this;
	this.instance_185.setTransform(67,184,0.5,0.5);

	this.instance_186 = new lib.Germany();
	this.instance_186.parent = this;
	this.instance_186.setTransform(67,391,0.5,0.5);

	this.instance_187 = new lib.Switzerland();
	this.instance_187.parent = this;
	this.instance_187.setTransform(67,430,0.5,0.5);

	this.instance_188 = new lib.Czech();
	this.instance_188.parent = this;
	this.instance_188.setTransform(67,225,0.5,0.5);

	this.instance_189 = new lib.USA();
	this.instance_189.parent = this;
	this.instance_189.setTransform(67,307,0.5,0.5);

	this.instance_190 = new lib.Finland();
	this.instance_190.parent = this;
	this.instance_190.setTransform(67,268,0.5,0.5);

	this.instance_191 = new lib.Sweden();
	this.instance_191.parent = this;
	this.instance_191.setTransform(67,144,0.5,0.5);

	this.instance_192 = new lib.Russia();
	this.instance_192.parent = this;
	this.instance_192.setTransform(67,349,0.5,0.5);

	this.instance_193 = new lib.Canada();
	this.instance_193.parent = this;
	this.instance_193.setTransform(67,103,0.5,0.5);

	this.instance_194 = new lib.Latvia();
	this.instance_194.parent = this;
	this.instance_194.setTransform(29,471,0.5,0.5);

	this.instance_195 = new lib.Slovakia();
	this.instance_195.parent = this;
	this.instance_195.setTransform(29,268,0.5,0.5);

	this.instance_196 = new lib.Belarus();
	this.instance_196.parent = this;
	this.instance_196.setTransform(186,471,0.5,0.5);

	this.instance_197 = new lib.Norway();
	this.instance_197.parent = this;
	this.instance_197.setTransform(423,430,0.5,0.5);

	this.instance_198 = new lib.Germany();
	this.instance_198.parent = this;
	this.instance_198.setTransform(28,391,0.5,0.5);

	this.instance_199 = new lib.Switzerland();
	this.instance_199.parent = this;
	this.instance_199.setTransform(28,430,0.5,0.5);

	this.instance_200 = new lib.Czech();
	this.instance_200.parent = this;
	this.instance_200.setTransform(29,184,0.5,0.5);

	this.instance_201 = new lib.USA();
	this.instance_201.parent = this;
	this.instance_201.setTransform(29,349,0.5,0.5);

	this.instance_202 = new lib.Finland();
	this.instance_202.parent = this;
	this.instance_202.setTransform(29,225,0.5,0.5);

	this.instance_203 = new lib.Sweden();
	this.instance_203.parent = this;
	this.instance_203.setTransform(29,144,0.5,0.5);

	this.instance_204 = new lib.Russia();
	this.instance_204.parent = this;
	this.instance_204.setTransform(29,307,0.5,0.5);

	this.instance_205 = new lib.Canada();
	this.instance_205.parent = this;
	this.instance_205.setTransform(29,103,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.text_47},{t:this.text_46},{t:this.text_45},{t:this.text_44},{t:this.text_43},{t:this.text_42},{t:this.text_41},{t:this.text_40},{t:this.text_39},{t:this.text_38},{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34},{t:this.text_33},{t:this.text_32},{t:this.text_31},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25}]},1).to({state:[]},1).wait(5));

	// hist
	this.bt_1_nazad = new lib.bt_Nazad();
	this.bt_1_nazad.parent = this;
	this.bt_1_nazad.setTransform(330.3,524,1,1.25);
	new cjs.ButtonHelper(this.bt_1_nazad, 0, 1, 2, false, new lib.bt_Nazad(), 3);

	this.text_48 = new cjs.Text("График движения сборных в рейтинге с 2003 по 2018 годы ", "bold 20px 'Myriad Pro'", "#000099");
	this.text_48.textAlign = "center";
	this.text_48.lineHeight = 27;
	this.text_48.lineWidth = 607;
	this.text_48.parent = this;
	this.text_48.setTransform(395,26);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000044").ss(1,1,1).p("Eg6PghHMB0fAAAQBXAAAABWIAACzQAABWhXAAMh0fAAAQhXAAAAhWIAAizQAAhWBXAAgEAq/gZOMAAAA5xEAxQgYoMAAAA4yEA3VgYoMAAAA4ZEg3ugZOMAAAA4/Egx2gZBMAAAA4yEgrxgY1MAAAA4ZEgk6gZBMAAZA5YA/P4oMAAAA4yA5K4oMAAAA4mAys41MAAAA5YAsb5BMAAAA4yAmj4cMAAAA4zAgS5BMAAAA4/AF+41MAAAA5YAMD4oMAAAA5xASU41MAAAA4mAYY5BMAAAA4yAep5BMAAAA5LEAk7gY1MAAAA4/");
	this.shape_125.setTransform(400.6,279.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0066FF").s().p("Eg6PACwQhXAAAAhXIAAixQAAhXBXAAMB0fAAAQBXAAAABXIAACxQAABXhXAAg");
	this.shape_126.setTransform(400.6,84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.text_48},{t:this.bt_1_nazad}]},1).to({state:[]},1).wait(5));

	// таблица
	this.instance_206 = new lib.SKorea();
	this.instance_206.parent = this;
	this.instance_206.setTransform(320,533);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKAAgFADQgFADgJAOIgQAZIgZAAIAVgfQAJgOAKgCQgRgCgHgIQgJgKABgNQAAgOAKgKQALgJATAAIA0AAIAABxgAgRgjQgGAFAAAIQAAAKAIAFQAHAFASAAIAVAAIAAgmIgcAAQgPAAgFAFg");
	this.shape_127.setTransform(532.9,566.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000099").s().p("AgkAsQgQgQABgbQgBgcAQgQQAOgPAXgBQAWABAPAPQAOAQABAbIAAAFIhVAAQABASAKALQAJAKAOAAQALgBAHgFQAHgGAFgMIAUADQgFARgMAKQgNAKgUAAQgYAAgOgQgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgNAAgJAJg");
	this.shape_128.setTransform(521.3,566.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000099").s().p("AgwBQIAAidIARAAIAAAPQAGgIAIgFQAIgEAKAAQAPAAALAIQALAHAGANQAFAOAAAQQABASgHANQgGAOgMAHQgMAIgNAAQgJAAgHgEQgIgEgFgGIAAA3gAgWg0QgJALAAAWQAAAVAJAKQAJALAMAAQAMAAAKgLQAJgLAAgWQAAgVgJgLQgJgLgMAAQgMAAgKAMg");
	this.shape_129.setTransform(509.4,568.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000099").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYABAPAPQAOAPAAAcQAAAVgGAMQgHAMgMAIQgNAGgPABQgXAAgPgQgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgKgOgBQgNAAgKALg");
	this.shape_130.setTransform(496.8,566.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000099").s().p("AAdBPIgbgrQgJgSgIgGQgHgHgMAAIAABKIgUAAIAAidIAUAAIAABFQAPAAAGgFQAGgGAHgVQAHgPAEgHQAFgGAIgEQAHgFAKAAIAMAAIAAASIgEAAIgEAAQgKAAgFAFQgFAFgGAQQgIAUgFAFQgGAFgHADQAPADAPAYIAgA1g");
	this.shape_131.setTransform(485.3,564);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKAAgFADQgFADgJAOIgQAZIgYAAIAUgfQAJgOAKgCQgRgCgHgIQgJgKABgNQAAgOAKgKQALgJATAAIA0AAIAABxgAgRgjQgGAFAAAIQAAAKAIAFQAHAFASAAIAVAAIAAgmIgbAAQgQAAgFAFg");
	this.shape_132.setTransform(465.4,566.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000099").s().p("AgqAzQgKgKABgOQAAgIADgIQAEgHAGgEQAHgCAHgDIASgDQAWgCALgFIAAgEQAAgMgGgFQgHgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAFgHQAGgIALgDQALgEAOgBQAPAAAJAEQAJADAEAGQAEAFADAHIABASIAAAZQAAAbAAAIQACAGAEAHIgVAAQgDgGAAgIQgLAJgKAEQgJAEgMAAQgSgBgLgIgAgEAHQgLACgGACQgFACgCAEQgDAFAAAEQAAAIAGAFQAGAGALgBQAKABAJgGQAJgEADgJQAEgGAAgNIAAgHQgLAEgUADg");
	this.shape_133.setTransform(453.8,566.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000099").s().p("AAbA5IAAgyIg1AAIAAAyIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_134.setTransform(441.7,566.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000099").s().p("AA1A5IgVgkQgGgKgFgDQgFgDgGAAIAAA0IgTAAIAAg0QgGAAgFADQgFADgGAKIgVAkIgVAAIAVgkQAMgTAMgCQgIgEgEgFIgKgXQgCgGgDgBIgIgBIgGAAIAAgQIADAAQALAAAFACQAEABAEAEQADAEAGAOQAHARAEAEQAEADAJAAIAAgxIATAAIAAAxQAJAAAEgDQADgEAIgRQAGgQAGgFQAFgEAMAAIAHAAIAAAQIgGAAQgHAAgCACQgDACgEAMQgFAMgDAEQgEAEgIAEQANACAMATIAVAkg");
	this.shape_135.setTransform(428.3,566.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000099").s().p("AgWA/QgTgTgDgiIgfAAIAABFIgVAAIAAidIAVAAIAABHIAfAAQACgiAUgTQATgUAdAAQAeAAAVAVQAUAWAAAlQAAAmgUAWQgVAVgfAAQgcAAgTgSgAgKguQgOARAAAeQAAAeAOAQQANARAWAAQAXAAAOgRQANgQAAgfQAAgdgNgRQgNgRgXAAQgYAAgMARg");
	this.shape_136.setTransform(410.1,564);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000099").s().p("AAfA5IAAgsIgLAAQgLgBgEADQgFADgJAOIgRAZIgYAAIAVgfQAKgOAJgBQgQgDgJgJQgIgJAAgNQAAgPALgJQALgJAUAAIA0AAIAABxgAgRgiQgFAFgBAHQABAKAGAFQAIAEARAAIAWAAIAAglIgcAAQgQAAgEAGg");
	this.shape_137.setTransform(472.5,532.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_138.setTransform(460.9,532.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000099").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAvIA1AAIAAgvIATAAIAABxg");
	this.shape_139.setTransform(448.7,532.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000099").s().p("AglAsQgOgPAAgcQAAgcAOgQQAPgPAXAAQAXAAAOAPQAOAPAAAcIAAAFIhTAAQABASAJAKQAKAKANAAQALABAHgGQAIgFAEgMIAUABQgFASgNAKQgMAJgUAAQgYAAgPgPgAgUgiQgKAJAAAPIA+AAQgBgPgGgGQgJgMgPAAQgMAAgJAJg");
	this.shape_140.setTransform(436.4,532.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000099").s().p("AguA5IAAhxIAsAAQAQAAAIACQAIAEAGAHQAFAHAAAKQAAAJgCAFQgEAHgHADQAIACAFAHQAGAIAAAKQgBARgLAHQgLAIgUAAgAgbApIAaAAQAPAAAHgDQAFgFABgJQAAgGgEgEQgDgFgGgBIgRgBIgYAAgAgbgIIAVAAQAMAAAEgCQAEgBAFgDQADgFAAgFQAAgJgHgEQgGgDgOAAIgWAAg");
	this.shape_141.setTransform(424.8,532.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000099").s().p("AgmAsQgOgPAAgdQAAgeARgQQAPgMAUAAQAYAAAPAPQAOAPAAAbQAAAWgGAMQgHANgMAGQgNAIgPgBQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKAKANAAQAOAAAKgLQAKgKAAgWQAAgVgKgKQgKgLgOAAQgNAAgKAKg");
	this.shape_142.setTransform(412.5,532.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000099").s().p("Ag3A4IAAgPIAJAAQAGAAACgCQADgBABgDQABgDAAgPIAAhJIBZAAIAABwIgUAAIAAhhIgyAAIAAA5QAAATgBAHQgCAGgFAFQgGAEgLAAIgQgBg");
	this.shape_143.setTransform(399.4,532.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000099").s().p("AgkBHQgQgKgIgUQgJgUAAgVQAAgZAKgSQAKgSAQgKQASgJAUAAQAYAAAPAMQARAMAGAVIgVAFQgFgRgLgIQgKgIgPAAQgSAAgMAJQgMAJgFAPQgFAOAAAQQAAATAGAPQAFAPANAHQANAIANAAQARAAANgKQAMgLAEgTIAVAFQgHAZgRAOQgRANgYAAQgZAAgQgKg");
	this.shape_144.setTransform(385.7,530.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgLABgEACQgFADgJAOIgRAZIgYAAIAVgeQAKgPAJgBQgQgDgJgIQgHgKgBgNQAAgPALgJQAKgJAVAAIA0AAIAABxgAgSgiQgEAEgBAIQABAKAGAFQAIAFARgBIAWAAIAAglIgcAAQgQAAgFAGg");
	this.shape_145.setTransform(427.6,498.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_146.setTransform(416,498.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000099").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_147.setTransform(403.8,498.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000099").s().p("AgpAyQgKgJAAgOQAAgIADgIQAEgHAGgDQAHgEAHgCIASgCQAWgDALgFIAAgFQAAgLgFgFQgIgGgOAAQgNAAgHAEQgGAFgEAMIgSgDQADgLAFgIQAGgHAMgEQALgFANAAQAPABAJADQAJADAFAFQADAFADAJIABASIAAAYQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMgBQgTAAgJgJgAgEAHQgMACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_148.setTransform(391.5,498.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000099").s().p("AA0BhIAAgkIhnAAIAAAkIgTAAIAAg3IAMAAQAUgdAAhWIAAgXIBeAAIAACKIAPAAIAAA3gAgShGQAAAVgEAiQgEAjgKAWIBHAAIAAh4Ig1AAg");
	this.shape_149.setTransform(377.6,498);

	this.instance_207 = new lib.Slovenia();
	this.instance_207.parent = this;
	this.instance_207.setTransform(303,500);

	this.instance_208 = new lib.Denmark();
	this.instance_208.parent = this;
	this.instance_208.setTransform(283,465);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgLAAgEADQgFADgJAOIgRAZIgYAAIAVgeQAKgPAJgCQgQgCgJgIQgIgKAAgNQAAgOALgKQAKgJAVAAIA0AAIAABxgAgSgjQgEAFgBAIQABAKAGAFQAIAFARAAIAWAAIAAgmIgcAAQgQAAgFAFg");
	this.shape_150.setTransform(419,462.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000099").s().p("AAcA5IAAhVIg1BVIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_151.setTransform(407.5,462.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000099").s().p("AAkBJIAAggIhXAAIAAhxIATAAIAABhIA0AAIAAhhIAUAAIAABhIAMAAIAAAwg");
	this.shape_152.setTransform(395.4,463.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000099").s().p("AAbA5IAAgyIg1AAIAAAyIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_153.setTransform(382.6,462.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000099").s().p("AgpAzQgKgKAAgOQAAgIADgIQAEgHAGgEQAHgCAHgDIASgDQAWgCALgFIAAgEQAAgMgFgFQgIgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAFgHQAGgIAMgDQALgEANgBQAPAAAJAEQAJADAFAGQADAFADAHIABASIAAAZQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMAAQgSgBgKgIgAgEAHQgMACgFACQgEACgDAEQgDAFAAAFQAAAHAGAFQAGAGALgBQAKABAJgGQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_154.setTransform(370.4,462.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000099").s().p("AgwBQIAAidIARAAIAAAPQAHgIAHgFQAIgEAKAAQAPAAALAIQALAHAGANQAFAOABAQQAAASgHANQgGAOgMAHQgMAIgNAAQgJAAgIgEQgHgEgFgGIAAA3gAgVg0QgKALAAAWQAAAVAJAKQAJALAMAAQAMAAAKgLQAJgLAAgWQAAgVgJgLQgJgLgMAAQgMAAgJAMg");
	this.shape_155.setTransform(358.5,464.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000099").s().p("AgJBQIAAgVQgcgBgSgQQgTgQAAgaQAAgZATgQQASgQAcgBIAAgVIATAAIAAAVQAeACARAQQASAQAAAYQAAAYgRARQgRARgfABIAAAVgAAKAqQAUgBAMgMQALgKAAgTQAAgSgLgKQgMgLgUgBgAgogcQgMAKAAASQAAATAMAKQALALAUABIAAhRQgTAAgMAMg");
	this.shape_156.setTransform(343.7,460);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKABgFACQgFADgJAOIgRAZIgXAAIAUgeQAKgPAJgBQgQgDgJgIQgHgKgBgNQAAgPALgJQAKgJAVAAIA0AAIAABxgAgSgiQgEAEAAAIQAAAKAGAFQAIAFARgBIAWAAIAAglIgbAAQgRAAgFAGg");
	this.shape_157.setTransform(393.5,427.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_158.setTransform(381.9,427.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000099").s().p("AguA5IAAhxIAtAAQAPAAAIADQAIACAGAIQAGAHgBAKQAAAJgDAFQgDAHgHADQAIADAFAHQAGAHAAAKQgCAQgKAIQgLAIgUAAgAgaApIAZAAQAQAAAFgDQAHgEAAgKQAAgGgEgEQgDgFgGgBIgRgBIgXAAgAgagIIAUAAQALAAAFgBQAFgCAEgEQADgDAAgGQAAgJgGgDQgHgEgPAAIgUAAg");
	this.shape_159.setTransform(370.2,427.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000099").s().p("AgJA5IAAhhIglAAIAAgQIBdAAIAAAQIgmAAIAABhg");
	this.shape_160.setTransform(359,427.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000099").s().p("AgpAyQgKgJAAgOQAAgIADgHQAEgIAGgDQAHgEAHgCIASgCQAWgDALgFIAAgFQAAgLgFgFQgIgGgOAAQgNAAgHAEQgGAFgEAMIgSgCQADgMAGgIQAFgHAMgEQALgFANAAQAPABAJADQAJADAFAFQADAGACAIIACASIAAAYQAAAbABAIQABAGADAHIgTAAQgDgGgBgIQgMAJgJAEQgJAEgLgBQgUAAgJgJgAgDAHQgNACgEACQgFACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEAEgJQADgGAAgNIAAgHQgLAEgTADg");
	this.shape_161.setTransform(347.8,427.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000099").s().p("Ag+BOIAEgTQAFACAEABQAHgBAEgFQADgGAAgTIAAhuIBhAAIAACdIgUAAIAAiLIg4AAIAABQQAAAagDALQgCAMgHAGQgHAGgMAAQgHAAgKgCg");
	this.shape_162.setTransform(333.7,425.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKABgFACQgFADgJAOIgRAZIgXAAIAUgeQAJgPAKgBQgRgDgIgIQgHgKAAgNQgBgOALgKQALgJATAAIA1AAIAABxgAgSgiQgEAEAAAIQgBAKAIAFQAHAFARgBIAWAAIAAglIgbAAQgQAAgGAGg");
	this.shape_163.setTransform(383.3,394.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000099").s().p("AAbA5IAAhVIg0BVIgVAAIAAhxIATAAIAABWIA1hWIAVAAIAABxg");
	this.shape_164.setTransform(371.8,394.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000099").s().p("AAUA5IgUgkQgGgKgEgDQgFgEgHAAIAAA1IgTAAIAAhxIATAAIAAAxQAKAAADgDQAEgEAGgRQAGgOAEgEQADgEAFgBQAEgCALAAIADAAIAAAQIgFAAQgIAAgCACIgHAOQgEALgEAFQgDAEgHAEQAMACAMATIAVAkg");
	this.shape_165.setTransform(361.6,394.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000099").s().p("AgpAyQgLgJABgOQAAgIADgIQAEgGAGgEQAHgDAHgDIASgCQAWgEALgEIAAgEQAAgMgGgFQgHgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAFgHQAGgHALgEQAMgFANAAQAPABAJADQAJADAEAGQAEAEADAJIABARIAAAZQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJADgMAAQgSAAgKgJgAgEAHQgLACgGACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_166.setTransform(349.8,394.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000099").s().p("AguA5IAAhxIAsAAQAQAAAIADQAIACAGAIQAGAHgBAKQAAAJgCAFQgEAGgHAFQAIABAFAIQAGAHAAAKQgCAQgKAIQgKAIgVAAgAgaApIAZAAQAQAAAFgEQAGgDABgKQAAgFgEgFQgDgEgGgCIgRgBIgXAAgAgagIIAUAAQALAAAFgBQAEgCAFgEQADgDAAgGQAAgJgHgDQgGgEgOAAIgVAAg");
	this.shape_167.setTransform(338.2,394.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000099").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPAAQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOAAAKgMQAKgKAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_168.setTransform(325.8,394.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000099").s().p("Ag3A5IAAgQIAJAAQAGgBACgBQADgBABgDQABgDAAgPIAAhJIBZAAIAABxIgUAAIAAhhIgyAAIAAA3QAAAUgBAGQgCAHgFAEQgGAGgLAAIgQgBg");
	this.shape_169.setTransform(312.7,394.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000099").s().p("AgkBHQgQgKgIgUQgJgUABgVQgBgZAKgSQAJgSASgKQARgJAUAAQAYAAAPAMQAQAMAHAVIgVAFQgFgRgKgIQgLgIgPAAQgSAAgMAJQgMAJgFAPQgFAOAAAQQAAATAGAPQAGAPAMAHQANAIANAAQARAAANgKQAMgLAEgTIAUAFQgGAZgRAOQgRANgYAAQgZAAgQgKg");
	this.shape_170.setTransform(299.1,391.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000099").s().p("AguA5IAAhxIAUAAIAAAsIAYAAQAXAAANAKQANAIAAAQQAAAPgLAKQgKAKgZAAgAgaApIAUAAQARAAAIgEQAIgFAAgKQAAgHgGgFQgGgHgTABIgWAAg");
	this.shape_171.setTransform(368.1,358.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000099").s().p("AgiAtQgPgQAAgcQAAgSAGgOQAHgOAMgGQANgIANAAQATAAAMAKQAMAJADARIgTADQgDgLgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJAKQAJAKANAAQALAAAIgGQAIgIACgOIATADQgDATgNAMQgNALgTgBQgWABgOgPg");
	this.shape_172.setTransform(356.8,358.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000099").s().p("AgpBOIgCgSIALABQAGAAAEgCIAGgGIAGgOIACgFIgrhxIAVAAIAXBCIAIAZQADgMAFgNIAYhCIATAAIgrBzIgKAaQgFAJgHAFQgGAEgKAAQgFAAgHgCg");
	this.shape_173.setTransform(345.5,361.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000099").s().p("AgxBQIAAicIASAAIAAAOQAHgIAHgFQAIgEAKAAQAPAAALAHQALAIAGAOQAGAOgBAPQAAASgFANQgHAOgMAIQgMAHgNAAQgJAAgHgEQgIgEgFgHIAAA4gAgWg1QgJAMAAAWQAAAVAJALQAJAKANAAQALAAAJgKQAKgLAAgXQAAgWgJgKQgJgLgMAAQgMAAgKALg");
	this.shape_174.setTransform(334.1,360.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000099").s().p("AgqAyQgKgJABgOQAAgJADgGQAEgIAGgDQAHgDAHgDIASgCQAWgEALgDIAAgGQAAgMgGgEQgHgGgOAAQgNgBgHAFQgGAFgEAMIgSgCQADgMAFgIQAGgHALgFQALgEAOAAQAPABAJADQAJADAEAFQAEAGADAIIABASIAAAYQAAAbABAHQABAIAEAGIgVAAQgDgGAAgIQgLAJgKAEQgJAEgMgBQgSABgLgKgAgEAHQgLACgGACQgFACgCAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgHAAgMIAAgHQgLAEgUADg");
	this.shape_175.setTransform(321.5,358.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000099").s().p("Ag3A4IAAgPIAJAAQAGAAACgCQADgBABgDQABgDAAgPIAAhJIBZAAIAABwIgUAAIAAhgIgyAAIAAA4QAAATgBAHQgCAGgFAEQgGAFgLABIgQgCg");
	this.shape_176.setTransform(308.4,358.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000099").s().p("AgkAsQgPgQgBgbQABgcAPgQQAOgQAXAAQAWAAAPAQQAPAPAAAcIAAAFIhVAAQABATAKAJQAJAKAOAAQAKABAIgGQAIgFAEgMIAUABQgEASgNAKQgNAJgUAAQgYAAgOgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgNAAgJAJg");
	this.shape_177.setTransform(296.4,358.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000099").s().p("Ag6BPIAAidIBlAAIAAATIhQAAIAAAwIAlAAQAUAAAMAEQANAEAHAKQAHALAAAPQAAAMgFAKQgFALgLAGQgKAHgaAAgAglA9IAoAAQARAAAJgHQAIgHAAgNQAAgKgFgHQgFgGgIgDQgJgCgUAAIgbAAg");
	this.shape_178.setTransform(283.6,356.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000099").s().p("AAfA5IAAgsIgLAAQgKgBgFADQgFADgJAOIgRAZIgXAAIAUgfQAJgOAKgBQgRgDgIgJQgHgJAAgNQgBgPALgJQALgJATAAIA0AAIAABxgAgSgjQgEAGAAAHQgBAKAIAFQAHAEARABIAWAAIAAgmIgbAAQgQAAgGAFg");
	this.shape_179.setTransform(344.2,323.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000099").s().p("AAbA5IAAhWIg0BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_180.setTransform(332.6,323.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000099").s().p("AggA5IAAhxIBBAAIAAAQIgtAAIAABhg");
	this.shape_181.setTransform(323.2,323.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000099").s().p("AgkAsQgPgPgBgcQABgcAPgQQAOgPAXAAQAWAAAPAPQAPAPAAAcIAAAFIhVAAQABATAKAJQAKALANgBQAKABAIgGQAHgFAFgMIAUACQgEARgNAKQgNAJgUAAQgYAAgOgPgAgUgiQgKAJgBAPIBAAAQgCgPgGgGQgJgMgPAAQgNAAgIAJg");
	this.shape_182.setTransform(312.3,323.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000099").s().p("AguA5IAAhxIAtAAQAPAAAIACQAIAEAGAGQAGAIAAAKQAAAJgEAFQgDAGgHAEQAIADAGAGQAFAIAAAKQgBARgLAHQgKAIgUAAgAgbApIAaAAQAQAAAFgDQAHgFAAgJQAAgFgDgFQgEgEgGgCIgRgBIgYAAgAgbgIIAVAAQALAAAFgCQAFgBADgDQAEgEAAgGQAAgJgGgEQgHgDgPAAIgVAAg");
	this.shape_183.setTransform(300.7,323.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000099").s().p("AgxBQIAAicIASAAIAAAOQAHgIAHgFQAIgEAKAAQAPAAALAHQALAIAGANQAFAOAAARQAAARgFANQgHAOgMAIQgMAHgNAAQgJAAgHgEQgIgEgFgGIAAA3gAgWg1QgJAMAAAWQAAAVAJALQAJAKANAAQAMAAAIgKQAKgMAAgVQAAgXgJgKQgJgLgMAAQgMAAgKALg");
	this.shape_184.setTransform(288.7,325.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000099").s().p("AgmAsQgOgPAAgdQAAgeARgQQAPgMAUAAQAYAAAPAPQAOAPAAAbQAAAWgGAMQgHAMgMAHQgNAIgPgBQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKAKANAAQAOABAKgMQAKgKAAgWQAAgVgKgKQgKgLgOAAQgNgBgKALg");
	this.shape_185.setTransform(276.1,323.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000099").s().p("AApBPIAAhKIhRAAIAABKIgVAAIAAidIAVAAIAABBIBRAAIAAhBIAVAAIAACdg");
	this.shape_186.setTransform(262,321.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000099").s().p("AAfA5IAAgsIgLAAQgKAAgFACQgFADgJAOIgQAZIgZAAIAVgfQAJgOAKgCQgRgCgHgIQgJgKABgNQAAgOAKgKQALgJATAAIA0AAIAABxgAgRgjQgGAGAAAHQAAAKAIAFQAHAEASABIAVAAIAAgmIgbAAQgQAAgFAFg");
	this.shape_187.setTransform(331.8,288.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000099").s().p("AAbA5IAAhVIg0BVIgVAAIAAhxIATAAIAABWIA1hWIAVAAIAABxg");
	this.shape_188.setTransform(320.2,288.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000099").s().p("AAbA5IAAgyIg1AAIAAAyIgTAAIAAhxIATAAIAAAvIA1AAIAAgvIATAAIAABxg");
	this.shape_189.setTransform(308,288.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000099").s().p("AgqAzQgJgKgBgOQAAgIAFgIQADgGAHgFQAFgDAIgCIARgDQAXgCALgFIAAgEQAAgNgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQACgLAHgIQAFgIALgDQAMgEANAAQAPAAAJADQAJADAEAGQAFAFABAHIABASIAAAZQAAAbABAIQACAGAEAHIgUAAQgEgGgBgIQgLAJgJAEQgJADgLABQgUgBgKgIgAgDAHQgMACgFACQgFACgDAEQgDAEAAAFQAAAIAGAGQAGAEALAAQAKAAAJgEQAIgGAFgIQADgHAAgMIAAgHQgLAEgTADg");
	this.shape_190.setTransform(295.7,288.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000099").s().p("AApA5IAAhbIgiBbIgQAAIgfhfIAABfIgTAAIAAhxIAdAAIAeBaIAhhaIAbAAIAABxg");
	this.shape_191.setTransform(282.1,288.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000099").s().p("AgxBQIAAidIASAAIAAAPQAGgJAIgEQAIgEAKAAQAPAAALAIQALAHAGANQAFAOABARQAAARgHANQgGAOgMAHQgMAIgNAAQgJAAgHgEQgIgEgFgGIAAA3gAgWg0QgJALAAAWQAAAVAJAKQAJALAMAAQAMAAAKgLQAJgKAAgWQAAgXgJgKQgJgLgMAAQgMAAgKAMg");
	this.shape_192.setTransform(268.7,290.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000099").s().p("AglAsQgOgQAAgbQAAgcAOgQQAPgPAXAAQAXAAAOAPQAOAQAAAbIAAAFIhTAAQAAATAKAKQAJAKAOAAQALgBAHgFQAHgGAFgMIAUADQgFARgNAKQgMAKgUAAQgYAAgPgQgAgVgiQgJAJgBAPIA/AAQgBgPgGgGQgJgMgPAAQgMAAgKAJg");
	this.shape_193.setTransform(256.1,288.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000099").s().p("AgyBPIAAidIBlAAIAAATIhQAAIAACKg");
	this.shape_194.setTransform(244.9,286);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000099").s().p("AAfA5IAAgsIgLAAQgLAAgEACQgFADgJAOIgRAZIgYAAIAVgeQAKgPAJgBQgQgDgJgJQgIgJAAgNQAAgPALgJQAKgJAVAAIA0AAIAABxgAgSgiQgEAEgBAIQABAKAGAFQAIAFARgBIAWAAIAAglIgcAAQgQAAgFAGg");
	this.shape_195.setTransform(311,252.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_196.setTransform(299.5,252.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000099").s().p("AgwBQIAAicIARAAIAAAOQAGgIAIgFQAIgEAKAAQAPAAALAHQALAIAGAOQAFAOABAQQAAARgHANQgGAOgMAIQgMAHgNAAQgJAAgIgEQgHgEgFgHIAAA4gAgVg1QgKAMAAAWQAAAVAJALQAJAKAMAAQAMAAAKgKQAJgLAAgWQAAgXgJgKQgJgLgMAAQgMAAgJALg");
	this.shape_197.setTransform(287.5,254.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000099").s().p("AgpAyQgKgJAAgOQAAgJADgGQAEgIAGgDQAHgDAHgDIASgCQAWgEALgDIAAgGQAAgMgFgEQgIgGgOAAQgNgBgHAFQgGAFgEAMIgSgCQADgMAGgIQAFgHAMgFQALgDANgBQAPABAJADQAJADAFAFQADAGACAIIACASIAAAYQAAAbABAHQABAIADAGIgTAAQgDgGgBgIQgMAJgJAEQgJAEgLgBQgUABgJgKgAgDAHQgNACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgLAEgTADg");
	this.shape_198.setTransform(274.9,252.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000099").s().p("AAkBJIAAggIhXAAIAAhxIATAAIAABhIA0AAIAAhhIAUAAIAABhIAMAAIAAAwg");
	this.shape_199.setTransform(262.9,253.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000099").s().p("AAcBPIAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxgAgTg5QgJgHgBgOIANAAQACAIAEADQAEAEAHAAQAJAAAEgDQAEgEACgIIAOAAQgDAOgIAHQgHAHgPAAQgMAAgIgHg");
	this.shape_200.setTransform(250.1,249.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000099").s().p("AglAsQgPgQABgbQgBgcAPgQQAPgQAXAAQAXAAAOAQQAOAPAAAcIAAAFIhUAAQABATAKAJQAJAKAOAAQALABAHgGQAHgFAFgMIAUABQgEASgOAKQgMAJgUAAQgYAAgPgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgMAAgKAJg");
	this.shape_201.setTransform(237.7,252.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000099").s().p("AguA5IAAhxIAsAAQAQAAAIADQAIACAGAIQAGAHgBAKQAAAJgDAFQgDAHgHADQAIADAFAGQAGAIAAAKQgCAQgKAIQgKAIgVAAgAgaApIAZAAQAQAAAFgDQAGgFABgJQAAgGgEgEQgDgFgGgBIgRgBIgXAAgAgagIIAUAAQALAAAFgCQAEgBAFgDQADgEAAgGQAAgJgHgEQgGgDgPAAIgUAAg");
	this.shape_202.setTransform(226.1,252.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000099").s().p("AhTBPIAAidIAVAAIAACKIA1AAIAAiKIAUAAIAACKIA0AAIAAiKIAUAAIAACdg");
	this.shape_203.setTransform(209.9,249.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgLAAgEADQgFADgJAOIgRAZIgYAAIAVgeQAKgPAJgCQgQgCgJgIQgIgKAAgNQAAgOALgKQALgJAUAAIA0AAIAABxgAgRgiQgFAEgBAIQABAKAGAFQAIAFARAAIAWAAIAAgmIgcAAQgQAAgEAGg");
	this.shape_204.setTransform(269.1,216.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000099").s().p("AAcA5IAAhVIg1BVIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_205.setTransform(257.5,216.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000099").s().p("AAdA5IgXgkIgGgJIgdAtIgYAAIArg6Igng3IAYAAIARAbIAIAMIAIgMIATgbIAYAAIgoA2IAqA7g");
	this.shape_206.setTransform(245.9,216.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000099").s().p("AglAsQgPgPAAgcQAAgcAPgQQAPgQAXAAQAWAAAPAQQAOAQAAAbIAAAFIhTAAQABASAJALQAKAJANABQAKgBAIgFQAHgGAFgMIAUACQgEASgOAKQgMAKgUAAQgYgBgPgPgAgUgiQgKAJAAAPIA/AAQgCgOgGgIQgJgLgPAAQgNAAgIAJg");
	this.shape_207.setTransform(234.2,216.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000099").s().p("AAnBPIAAhAQgcALgUAAQgRAAgMgIQgMgIgFgKQgEgMAAgTIAAgvIAUAAIAAAtQABAZAJAIQAJAIAOAAQAUAAAZgJIAAhNIAVAAIAACdg");
	this.shape_208.setTransform(220.4,214.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000099").s().p("AAyBPIgSgwIhBAAIgRAwIgXAAIA9idIAVAAIBBCdgAgKgfIgRAtIA0AAIgQgrQgIgTgCgNQgDAPgGAPg");
	this.shape_209.setTransform(240.8,178);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000099").s().p("AhTBPIAAidIAVAAIAACKIA1AAIAAiKIAUAAIAACKIA0AAIAAiKIAUAAIAACdg");
	this.shape_210.setTransform(223.4,178);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000099").s().p("AgkBHQgQgKgIgUQgJgUABgVQgBgZAKgSQAJgSASgKQARgJAUAAQAYAAAPAMQARAMAGAVIgVAFQgFgRgKgIQgLgIgPAAQgSAAgMAJQgMAJgFAPQgFAOAAAQQAAATAGAPQAGAPAMAHQAMAIAOAAQARAAANgKQAMgLAEgTIAUAFQgGAZgRAOQgRANgYAAQgZAAgQgKg");
	this.shape_211.setTransform(205.5,178);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKABgFACQgFADgJAOIgRAZIgXAAIAUgeQAJgPAKgBQgRgDgIgIQgHgKAAgNQgBgPALgJQALgJATAAIA0AAIAABxgAgSgiQgEAEAAAIQgBAKAIAFQAHAFARgBIAWAAIAAglIgbAAQgQAAgGAGg");
	this.shape_212.setTransform(260.9,146.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000099").s().p("AAbA5IAAhWIg0BWIgVAAIAAhxIATAAIAABWIA1hWIAVAAIAABxg");
	this.shape_213.setTransform(249.4,146.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000099").s().p("AAtBJIAAggIhZAAIAAAgIgQAAIAAgwIAKAAQAVgbgBhGIBOAAIAABhIANAAIAAAwgAgfAZIA8AAIAAhRIgrAAQgCA3gPAag");
	this.shape_214.setTransform(236.4,148.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000099").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_215.setTransform(224.3,146.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKABgFACQgFADgJAOIgQAZIgZAAIAVgeQAKgPAJgBQgRgDgHgIQgJgKABgNQAAgPAKgJQAKgJAUAAIA0AAIAABxgAgRgiQgGAEAAAIQAAAKAIAFQAHAFASgBIAVAAIAAglIgcAAQgPAAgFAGg");
	this.shape_216.setTransform(211.7,146.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000099").s().p("Ag3A5IAAgQIAJAAQAGgBACgBQADgBABgDQABgDAAgPIAAhJIBZAAIAABxIgUAAIAAhhIgyAAIAAA4QAAATgBAHQgCAGgFAEQgGAFgLABIgQgBg");
	this.shape_217.setTransform(199.3,146.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000099").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_218.setTransform(187.4,146.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_219.setTransform(175.2,146.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000099").s().p("AgJBQIAAgVQgcgBgSgQQgTgQAAgaQAAgaATgPQASgQAcgBIAAgUIATAAIAAAUQAeABARARQASAQAAAYQAAAYgRAQQgRARgfACIAAAVgAAKApQAUAAAMgMQALgKAAgTQAAgRgLgLQgMgLgUgBgAgogdQgMALAAASQAAATAMAKQALAMAUAAIAAhRQgTABgMAKg");
	this.shape_220.setTransform(160.6,144.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKABgFACQgFADgJAOIgQAZIgZAAIAVgeQAJgPAKgCQgRgCgHgIQgJgKABgNQAAgOAKgKQALgJATAAIA0AAIAABxgAgRgiQgGAEAAAIQAAAKAIAFQAHAFASgBIAVAAIAAglIgbAAQgQAAgFAGg");
	this.shape_221.setTransform(213,109.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000099").s().p("AAbA5IAAhVIg0BVIgVAAIAAhxIATAAIAABWIA1hWIAVAAIAABxg");
	this.shape_222.setTransform(201.4,109.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000099").s().p("AAkBJIAAggIhXAAIAAhxIATAAIAABhIA0AAIAAhhIAUAAIAABhIAMAAIAAAwg");
	this.shape_223.setTransform(189.4,111.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000099").s().p("AgkAsQgPgQgBgbQABgcAPgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQACASAJALQAKAJANABQALAAAHgGQAHgGAFgMIAUACQgEASgNAKQgNAKgUgBQgYAAgOgPgAgUgiQgJAJgBAPIA/AAQgCgOgGgIQgJgLgPAAQgNAAgIAJg");
	this.shape_224.setTransform(176.5,109.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000099").s().p("AguA5IAAhxIAtAAQAPAAAIADQAIACAGAIQAFAHABAKQAAAJgEAFQgDAGgHAFQAIABAGAIQAFAHAAAKQgCAQgKAIQgLAIgTAAgAgbApIAaAAQAQAAAFgDQAHgEAAgKQAAgFgDgFQgEgEgGgCIgRgBIgYAAgAgbgIIAVAAQALAAAFgBQAEgCAEgEQAEgDAAgGQAAgJgGgDQgHgEgPAAIgVAAg");
	this.shape_225.setTransform(164.9,109.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000099").s().p("AhSBPIAAidIAUAAIAACKIA0AAIAAiKIAUAAIAACKIA0AAIAAiKIAVAAIAACdg");
	this.shape_226.setTransform(148.7,107.5);

	this.instance_209 = new lib.France();
	this.instance_209.parent = this;
	this.instance_209.setTransform(263,430);

	this.instance_210 = new lib.Latvia();
	this.instance_210.parent = this;
	this.instance_210.setTransform(243,396);

	this.instance_211 = new lib.Slovakia();
	this.instance_211.parent = this;
	this.instance_211.setTransform(223,362);

	this.instance_212 = new lib.Belarus();
	this.instance_212.parent = this;
	this.instance_212.setTransform(203,326);

	this.instance_213 = new lib.Norway();
	this.instance_213.parent = this;
	this.instance_213.setTransform(183,290);

	this.instance_214 = new lib.Germany();
	this.instance_214.parent = this;
	this.instance_214.setTransform(163,255);

	this.instance_215 = new lib.Switzerland();
	this.instance_215.parent = this;
	this.instance_215.setTransform(139,219);

	this.instance_216 = new lib.Czech();
	this.instance_216.parent = this;
	this.instance_216.setTransform(123,184);

	this.instance_217 = new lib.USA();
	this.instance_217.parent = this;
	this.instance_217.setTransform(103,149);

	this.instance_218 = new lib.Finland();
	this.instance_218.parent = this;
	this.instance_218.setTransform(83,114);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000099").s().p("AAfA5IAAgsIgLAAQgLgBgEADQgFADgJAOIgRAZIgYAAIAVgfQAKgOAJgBQgQgDgJgJQgHgJgBgNQAAgPALgJQAKgJAVAAIA0AAIAABxgAgSgjQgEAGgBAHQABAKAGAFQAIAEARABIAWAAIAAgmIgcAAQgQAAgFAFg");
	this.shape_227.setTransform(189.1,72.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_228.setTransform(177.5,72.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000099").s().p("AgiAsQgPgPAAgdQAAgRAGgOQAHgOAMgGQANgIANABQATAAAMAJQAMAJADASIgTACQgDgLgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJAKQAJALANgBQALABAIgIQAIgGACgPIATACQgDAVgNALQgNALgTgBQgWAAgOgPg");
	this.shape_229.setTransform(166.2,72.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000099").s().p("AgiAsQgPgPAAgdQAAgRAGgOQAHgOAMgGQANgIANABQATAAAMAJQAMAJADASIgTACQgDgLgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJAKQAJALANgBQALABAIgIQAIgGACgPIATACQgDAVgNALQgNALgTgBQgWAAgOgPg");
	this.shape_230.setTransform(155.2,72.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000099").s().p("AgmAsQgOgPAAgdQAAgeARgQQAPgMAUAAQAYAAAPAPQAOAPAAAbQAAAWgGAMQgHAMgMAHQgNAIgPgBQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKAKANAAQAOABAKgMQAKgKAAgWQAAgVgKgKQgKgLgOAAQgNgBgKALg");
	this.shape_231.setTransform(143.2,72.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000099").s().p("Ag7BPIAAidIA7AAQAPAAAIACQAMACAIAFQAHAGAGAJQAEAKAAAMQAAAUgMANQgNAOgiAAIgnAAIAABAgAgmgDIAoAAQATAAAJgHQAJgIAAgOQgBgJgEgHQgGgHgHgDQgFgBgPAAIgnAAg");
	this.shape_232.setTransform(130.2,70.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000099").s().p("AgpAyQgLgJABgOQAAgIADgIQAEgHAGgDQAHgEAHgCIASgCQAWgDALgEIAAgGQAAgLgGgFQgHgGgOAAQgNAAgHAEQgGAFgEAMIgSgDQADgLAFgIQAGgHALgEQAMgFANAAQAPABAJADQAJADAEAFQAFAFACAJIABASIAAAYQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMgBQgSAAgKgJgAgEAHQgLACgGACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_233.setTransform(169.8,38);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000099").s().p("AAtBJIAAggIhZAAIAAAgIgQAAIAAgwIAKAAQAVgbgBhGIBOAAIAABhIANAAIAAAwgAgfAZIA8AAIAAhRIgrAAQgCA3gPAag");
	this.shape_234.setTransform(156.9,39.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000099").s().p("AgqAyQgKgJABgOQAAgIADgIQAEgHAGgDQAHgEAHgCIASgCQAWgDALgEIAAgGQAAgLgGgFQgHgGgOAAQgNAAgHAEQgGAFgEAMIgSgDQADgLAFgIQAGgHALgEQALgFAOAAQAPABAJADQAJADAEAFQAEAFADAJIABASIAAAYQAAAbAAAIQACAGAEAHIgVAAQgDgGAAgIQgLAJgKAEQgJAEgMgBQgSAAgLgJgAgEAHQgLACgGACQgFACgCAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgLAEgUADg");
	this.shape_235.setTransform(144.7,38);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000099").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_236.setTransform(132.5,38);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000099").s().p("AgpAyQgLgJABgOQAAgIADgIQAEgHAGgDQAHgEAHgCIASgCQAWgDALgEIAAgGQAAgLgFgFQgIgGgOAAQgNAAgHAEQgGAFgEAMIgSgDQADgLAFgIQAGgHAMgEQALgFANAAQAPABAJADQAJADAEAFQAFAFACAJIABASIAAAYQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMgBQgSAAgKgJgAgEAHQgLACgGACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_237.setTransform(120.3,38);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000099").s().p("AAdBPIgagrQgKgSgHgGQgIgHgMAAIAABKIgUAAIAAidIAUAAIAABFQAPAAAGgFQAGgGAHgVQAHgPAFgHQADgGAJgEQAHgFAKAAIAMAAIAAASIgEAAIgEAAQgKAAgFAFQgFAFgGAQQgIAUgFAFQgGAFgHADQAPADAPAYIAgA1g");
	this.shape_238.setTransform(108.7,35.8);

	this.instance_219 = new lib.Sweden();
	this.instance_219.parent = this;
	this.instance_219.setTransform(63,78);

	this.instance_220 = new lib.Russia();
	this.instance_220.parent = this;
	this.instance_220.setTransform(43,42);

	this.instance_221 = new lib.Canada();
	this.instance_221.parent = this;
	this.instance_221.setTransform(23,5);

	this.text_49 = new cjs.Text("Чемпионат мира по хоккею 2018", "44px 'Comic Sans MS'", "#000066");
	this.text_49.textAlign = "center";
	this.text_49.lineHeight = 63;
	this.text_49.lineWidth = 462;
	this.text_49.parent = this;
	this.text_49.setTransform(511,22.3);
	this.text_49.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,12);

	this.bt_0_hist = new lib.bt_0_hist();
	this.bt_0_hist.parent = this;
	this.bt_0_hist.setTransform(587.3,185.9,1,1.25);
	new cjs.ButtonHelper(this.bt_0_hist, 0, 1, 2, false, new lib.bt_0_hist(), 3);

	this.bt_0_start = new lib.bt_Start();
	this.bt_0_start.parent = this;
	this.bt_0_start.setTransform(596.4,516.6,1,1.25);
	new cjs.ButtonHelper(this.bt_0_start, 0, 1, 2, false, new lib.bt_Start(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt_0_start},{t:this.bt_0_hist},{t:this.text_49},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.instance_208},{t:this.instance_207},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.instance_206}]}).to({state:[]},1).wait(6));

	// фон
	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("ADlIrItrgCIAAj3INrACIFDABIBfAAIgIAMIgIAMIgIALIgEAMIgHAMIgIAMIgIALIgIAMIgIAMIgIAMIgHALIgEAMIgIAMIgBABIgHALIgIALIgIAMIgHAMIgIAMIgIALIgEAMIgEAIIgEAEIkJgBgADlB1ItrgCIAAj3INrADIFDAAIABAAIgBACIgHAKIgIAMIgIAMIgEALIgHAMIgIAMIgIAMIgIALIgIAMIgIAMIgHALIgEALIgIAMIgIAMIgIAMIgIALIgIAMIgHAMIgIAMIgEALIgEAIIgEAEIirAAgADlkyItrgCIAAj3INrACIDGAAIiFDXIgLAQQgIAIgIAEQgIAEgUAAg");
	this.shape_239.setTransform(64.7,509.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_239).to({_off:true},1).wait(6));

	// фото
	this.instance_222 = new lib.h3();
	this.instance_222.parent = this;
	this.instance_222.setTransform(440,263,0.972,0.891);

	this.timeline.addTween(cjs.Tween.get(this.instance_222).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400.1,246.5,790,736.8);
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#6699CC",
	opacity: 1.00,
	manifest: [
		{src:"images/Belarus.png?1522610761414", id:"Belarus"},
		{src:"images/Canada.png?1522610761414", id:"Canada"},
		{src:"images/Czech.png?1522610761414", id:"Czech"},
		{src:"images/Denmark.png?1522610761414", id:"Denmark"},
		{src:"images/Finland.png?1522610761414", id:"Finland"},
		{src:"images/France.png?1522610761414", id:"France"},
		{src:"images/Germany.png?1522610761414", id:"Germany"},
		{src:"images/h3.jpg?1522610761414", id:"h3"},
		{src:"images/Latvia.png?1522610761414", id:"Latvia"},
		{src:"images/Norway.png?1522610761414", id:"Norway"},
		{src:"images/Russia.png?1522610761414", id:"Russia"},
		{src:"images/SKorea.png?1522610761414", id:"SKorea"},
		{src:"images/Slovakia.png?1522610761414", id:"Slovakia"},
		{src:"images/Slovenia.png?1522610761414", id:"Slovenia"},
		{src:"images/Sweden.png?1522610761414", id:"Sweden"},
		{src:"images/Switzerland.png?1522610761414", id:"Switzerland"},
		{src:"images/USA.png?1522610761414", id:"USA"},
		{src:"sounds/organ2.mp3?1522610761415", id:"organ2"},
		{src:"sounds/period.mp3?1522610761415", id:"period"},
		{src:"sounds/strik.mp3?1522610761415", id:"strik"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;