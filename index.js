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


(lib.country = function() {
	this.initialize(img.country);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,514);


(lib.CzechRepublic = function() {
	this.initialize(img.CzechRepublic);
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


(lib.history = function() {
	this.initialize(img.history);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1029,546);


(lib.Kazakhstan = function() {
	this.initialize(img.Kazakhstan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


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


(lib.UnitedStates = function() {
	this.initialize(img.UnitedStates);
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
	this.shape.graphics.f("rgba(0,255,0,0.749)").s().p("ApwCvIAAldIThAAIAAFdg");
	this.shape.setTransform(62.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fon_goal, new cjs.Rectangle(0,0,125,35), null);


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

	// Слой 1
	this.text = new cjs.Text("Старт", "bold 16px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(81,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C0000","#FF1533"],[0,1],5,37.4,5,-34.1).s().p("AuDDIIAAmPIcHAAIAAGPg");
	this.shape.setTransform(79,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,0,180,40);


(lib.bt_Next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,0,180,40);


(lib.bt_Nazad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,0,180,40);


(lib.bt_0_hist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,180,40);


(lib.bt_2_champ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,0,180,40);


(lib.Шайба = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ApxhjIAAgDQAChBC1guQC4gvECAAQEDAAC3AvQC4AvAABCQAAACAAACIgBC/QABACAAADQAAABAAAAQAABCi4AuQhGAThQAKQiEATigAAQifAAiEgTQhRgKhGgTQi3guAAhCQAAgEABgCgAJyhgQgGA/iyAsQi3AvkDAAQkCAAi4gvQi1gsgChC");
	this.shape.setTransform(62.6,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkjCiQhQgLhHgSQi2gugBhCIABgHIgBjBQADBBC0AuQC4AvECAAQEDAAC3gvQCygtAFg/IAAC+IAAAFIAAACQABBCi4AuQhGAShQALQiEASigAAQifAAiEgSg");
	this.shape_1.setTransform(62.6,34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#4E5459","#000910"],[0,0.773],24.1,-8.9,0,24.1,-8.9,91.8).s().p("Am6BwQi0gtgDhBIAAgCQADhCC0guQC4gvECAAQEDAAC3AvQC4AvgBBBIAAAEQgFA/iyAtQi3AwkDgBQkCABi4gwg");
	this.shape_2.setTransform(62.6,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,127.1,54.1);


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
	this.shape.graphics.f().s("#C4C9CE").ss(0.1,1,1).p("EgE/gj2IAAmVIKJAAIAAGVIAAEbIAAFAIAAE3IAAE6IAAFAIAAE7IAAE6IAAFCIAAEzIAAE8IAAE9IAAE8IAAE6IAAFCIAAFAIAAEbIqJAAIAAkbIKJAAEgFJgj2IAKAAIKJAAAk//XIAAkfAk//XIKJgEAk/1kIAAk3IKJAAAk/rqIAAlAIAAk6IKJAAAk/rqIKJAAAk/wqIKJAAAk/6bIAAk8AlJDNIAKAAIAAlCIAAk6IKJAAAk/DNIKJAAAk/h1IKJAAAk/R5IAAk9IAAk8IKJAAAk/R5IKJAAAk/M8IKJAAAk/IAIAAkzAk/mvIAAk7EgE/AgxIAAlCIAAk6IKJAAEgE/AgxIKJAAAk/bvIKJAAEgE/AlxIAAlAAk/W1IAAk8");
	this.shape.setTransform(33,270);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F9FA").s().p("EgFEAqMIAAkbIAAlBIKJAAIAAFBIqJAAIKJAAIAAEbgEgFEAgwIAAlBIAAk5IKJAAIAAE5IqJAAIKJAAIAAFBgAlEW2IAAk9IKJAAIAAE9gAlER5IAAk+IKJAAIAAE+gAlEM7IAAk7IKJAAIAAE7gAlEM7gAlEIAIAAkzIKJAAIAAEzgAlEDNIAAlCIAAk6IKJAAIAAE6IqJAAIKJAAIAAFCgAlEmvIAAk7IKJAAIAAE7gAlErqIAAlAIKJAAIAAFAgAlErqgAlEwqIAAk6IKJAAIAAE6gAlEwqgAFF1kIqJAAIAAk3IKJAAIAAE3gAlE1kgAlE6bIAAk8IKJgEIqJAEIAAkfIAAmVIKJAAIAAGVIqJAAIKJAAIAAEbIAAFAg");
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


(lib.stolbec_2_moral = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.at16 = new cjs.Text("56", "16px 'LuzSans-Book'");
	this.at16.name = "at16";
	this.at16.textAlign = "center";
	this.at16.lineHeight = 23;
	this.at16.lineWidth = 54;
	this.at16.parent = this;
	this.at16.setTransform(33.1,515.6);

	this.at10 = new cjs.Text("68", "16px 'LuzSans-Book'");
	this.at10.name = "at10";
	this.at10.textAlign = "center";
	this.at10.lineHeight = 23;
	this.at10.lineWidth = 54;
	this.at10.parent = this;
	this.at10.setTransform(33.1,325.8);

	this.at11 = new cjs.Text("68", "16px 'LuzSans-Book'");
	this.at11.name = "at11";
	this.at11.textAlign = "center";
	this.at11.lineHeight = 23;
	this.at11.lineWidth = 54;
	this.at11.parent = this;
	this.at11.setTransform(33.1,358.2);

	this.at12 = new cjs.Text("66", "16px 'LuzSans-Book'");
	this.at12.name = "at12";
	this.at12.textAlign = "center";
	this.at12.lineHeight = 23;
	this.at12.lineWidth = 54;
	this.at12.parent = this;
	this.at12.setTransform(33.1,389.2);

	this.at13 = new cjs.Text("64", "16px 'LuzSans-Book'");
	this.at13.name = "at13";
	this.at13.textAlign = "center";
	this.at13.lineHeight = 23;
	this.at13.lineWidth = 54;
	this.at13.parent = this;
	this.at13.setTransform(33.1,421.1);

	this.at14 = new cjs.Text("62", "16px 'LuzSans-Book'");
	this.at14.name = "at14";
	this.at14.textAlign = "center";
	this.at14.lineHeight = 23;
	this.at14.lineWidth = 54;
	this.at14.parent = this;
	this.at14.setTransform(33.1,452.8);

	this.at15 = new cjs.Text("60", "16px 'LuzSans-Book'");
	this.at15.name = "at15";
	this.at15.textAlign = "center";
	this.at15.lineHeight = 23;
	this.at15.lineWidth = 54;
	this.at15.parent = this;
	this.at15.setTransform(33.1,485.1);

	this.at8 = new cjs.Text("70", "16px 'LuzSans-Book'");
	this.at8.name = "at8";
	this.at8.textAlign = "center";
	this.at8.lineHeight = 23;
	this.at8.lineWidth = 54;
	this.at8.parent = this;
	this.at8.setTransform(33.1,263.9);

	this.at9 = new cjs.Text("70", "16px 'LuzSans-Book'");
	this.at9.name = "at9";
	this.at9.textAlign = "center";
	this.at9.lineHeight = 23;
	this.at9.lineWidth = 54;
	this.at9.parent = this;
	this.at9.setTransform(33.1,295.5);

	this.at7 = new cjs.Text("76", "16px 'LuzSans-Book'");
	this.at7.name = "at7";
	this.at7.textAlign = "center";
	this.at7.lineHeight = 23;
	this.at7.lineWidth = 54;
	this.at7.parent = this;
	this.at7.setTransform(33.1,231.8);

	this.at6 = new cjs.Text("80", "16px 'LuzSans-Book'");
	this.at6.name = "at6";
	this.at6.textAlign = "center";
	this.at6.lineHeight = 23;
	this.at6.lineWidth = 54;
	this.at6.parent = this;
	this.at6.setTransform(33.1,200.4);

	this.at5 = new cjs.Text("84", "16px 'LuzSans-Book'");
	this.at5.name = "at5";
	this.at5.textAlign = "center";
	this.at5.lineHeight = 23;
	this.at5.lineWidth = 54;
	this.at5.parent = this;
	this.at5.setTransform(33.1,168.6);

	this.at4 = new cjs.Text("86", "16px 'LuzSans-Book'");
	this.at4.name = "at4";
	this.at4.textAlign = "center";
	this.at4.lineHeight = 23;
	this.at4.lineWidth = 54;
	this.at4.parent = this;
	this.at4.setTransform(33.1,136.5);

	this.at3 = new cjs.Text("86", "16px 'LuzSans-Book'");
	this.at3.name = "at3";
	this.at3.textAlign = "center";
	this.at3.lineHeight = 23;
	this.at3.lineWidth = 54;
	this.at3.parent = this;
	this.at3.setTransform(33.1,105.9);

	this.at2 = new cjs.Text("92", "16px 'LuzSans-Book'");
	this.at2.name = "at2";
	this.at2.textAlign = "center";
	this.at2.lineHeight = 23;
	this.at2.lineWidth = 54;
	this.at2.parent = this;
	this.at2.setTransform(33.1,74.3);

	this.at1 = new cjs.Text("92", "16px 'LuzSans-Book'");
	this.at1.name = "at1";
	this.at1.textAlign = "center";
	this.at1.lineHeight = 23;
	this.at1.lineWidth = 54;
	this.at1.parent = this;
	this.at1.setTransform(33.1,44.4);

	this.text = new cjs.Text("Мораль", "16px 'LuzSans-Book'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 60;
	this.text.parent = this;
	this.text.setTransform(33.9,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C4C9CE").ss(0.1,1,1).p("EgE/gj2IAAmVIKJAAIAAGVIAAEbIAAFAIAAE3IAAE6IAAFAIAAE7IAAE6IAAFCIAAEzIAAE8IAAE9IAAE8IAAE6IAAFCIAAFAIAAEbIqJAAIAAkbIKJAAEgFJgj2IAKAAIKJAAAk//XIKJgEAk//XIAAkfAk/1kIAAk3IKJAAAk/rqIAAlAIKJAAAk/1kIKJAAAk/rqIKJAAAk/wqIAAk6Ak/6bIAAk8Ak/DNIAAlCIKJAAAlJDNIAKAAIKJAAAk/mvIKJAAAk/h1IAAk6IAAk7Ak/R5IAAk9IKJAAAk/IAIKJAAAk/R5IKJAAAk/M8IAAk8IAAkzEgE/AgxIAAlCIKJAAAk/W1IKJAAEgE/AgxIKJAAAk/bvIAAk6IAAk8EgE/AlxIAAlA");
	this.shape.setTransform(33,270);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F9FA").s().p("EgFEAqMIAAkbIKJAAIAAEbgEgFEAlxIAAlBIKJAAIAAFBgEgFEAgwIAAlBIKJAAIAAFBgAlEbvIAAk5IAAk9IKJAAIAAE9IqJAAIKJAAIAAE5gAlER5IAAk+IKJAAIAAE+gAlEM7IAAk7IAAkzIAAlCIKJAAIAAFCIqJAAIKJAAIAAEzIqJAAIKJAAIAAE7gAlEh1IAAk6IKJAAIAAE6gAlEmvIAAk7IAAlAIKJAAIAAFAIqJAAIKJAAIAAE7gAFFwqIqJAAIAAk6IKJAAIAAE6gAlE1kIAAk3IAAk8IKJgEIAAFAIqJAAIKJAAIAAE3gEgFEgj2IKJAAIqJAAIAAmVIKJAAIAAGVIAAEbIqJAEgAFF/bg");
	this.shape_1.setTransform(33.6,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.at1},{t:this.at2},{t:this.at3},{t:this.at4},{t:this.at5},{t:this.at6},{t:this.at7},{t:this.at9},{t:this.at8},{t:this.at15},{t:this.at14},{t:this.at13},{t:this.at12},{t:this.at11},{t:this.at10},{t:this.at16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stolbec_2_moral, new cjs.Rectangle(-1,-1,68.1,542), null);


(lib.stolbec_2_forma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.at16 = new cjs.Text("62", "16px 'LuzSans-Book'");
	this.at16.name = "at16";
	this.at16.textAlign = "center";
	this.at16.lineHeight = 23;
	this.at16.lineWidth = 54;
	this.at16.parent = this;
	this.at16.setTransform(33.1,515.6);

	this.at10 = new cjs.Text("70", "16px 'LuzSans-Book'");
	this.at10.name = "at10";
	this.at10.textAlign = "center";
	this.at10.lineHeight = 23;
	this.at10.lineWidth = 54;
	this.at10.parent = this;
	this.at10.setTransform(33.1,325.8);

	this.at11 = new cjs.Text("66", "16px 'LuzSans-Book'");
	this.at11.name = "at11";
	this.at11.textAlign = "center";
	this.at11.lineHeight = 23;
	this.at11.lineWidth = 54;
	this.at11.parent = this;
	this.at11.setTransform(33.1,358.2);

	this.at12 = new cjs.Text("64", "16px 'LuzSans-Book'");
	this.at12.name = "at12";
	this.at12.textAlign = "center";
	this.at12.lineHeight = 23;
	this.at12.lineWidth = 54;
	this.at12.parent = this;
	this.at12.setTransform(33.1,389.2);

	this.at13 = new cjs.Text("66", "16px 'LuzSans-Book'");
	this.at13.name = "at13";
	this.at13.textAlign = "center";
	this.at13.lineHeight = 23;
	this.at13.lineWidth = 54;
	this.at13.parent = this;
	this.at13.setTransform(33.1,421.1);

	this.at14 = new cjs.Text("62", "16px 'LuzSans-Book'");
	this.at14.name = "at14";
	this.at14.textAlign = "center";
	this.at14.lineHeight = 23;
	this.at14.lineWidth = 54;
	this.at14.parent = this;
	this.at14.setTransform(33.1,452.8);

	this.at15 = new cjs.Text("66", "16px 'LuzSans-Book'");
	this.at15.name = "at15";
	this.at15.textAlign = "center";
	this.at15.lineHeight = 23;
	this.at15.lineWidth = 54;
	this.at15.parent = this;
	this.at15.setTransform(33.1,485.1);

	this.at8 = new cjs.Text("72", "16px 'LuzSans-Book'");
	this.at8.name = "at8";
	this.at8.textAlign = "center";
	this.at8.lineHeight = 23;
	this.at8.lineWidth = 54;
	this.at8.parent = this;
	this.at8.setTransform(33.1,263.9);

	this.at9 = new cjs.Text("68", "16px 'LuzSans-Book'");
	this.at9.name = "at9";
	this.at9.textAlign = "center";
	this.at9.lineHeight = 23;
	this.at9.lineWidth = 54;
	this.at9.parent = this;
	this.at9.setTransform(33.1,295.5);

	this.at7 = new cjs.Text("74", "16px 'LuzSans-Book'");
	this.at7.name = "at7";
	this.at7.textAlign = "center";
	this.at7.lineHeight = 23;
	this.at7.lineWidth = 54;
	this.at7.parent = this;
	this.at7.setTransform(33.1,231.8);

	this.at6 = new cjs.Text("76", "16px 'LuzSans-Book'");
	this.at6.name = "at6";
	this.at6.textAlign = "center";
	this.at6.lineHeight = 23;
	this.at6.lineWidth = 54;
	this.at6.parent = this;
	this.at6.setTransform(33.1,200.4);

	this.at5 = new cjs.Text("84", "16px 'LuzSans-Book'");
	this.at5.name = "at5";
	this.at5.textAlign = "center";
	this.at5.lineHeight = 23;
	this.at5.lineWidth = 54;
	this.at5.parent = this;
	this.at5.setTransform(33.1,168.6);

	this.at4 = new cjs.Text("84", "16px 'LuzSans-Book'");
	this.at4.name = "at4";
	this.at4.textAlign = "center";
	this.at4.lineHeight = 23;
	this.at4.lineWidth = 54;
	this.at4.parent = this;
	this.at4.setTransform(33.1,136.5);

	this.at3 = new cjs.Text("82", "16px 'LuzSans-Book'");
	this.at3.name = "at3";
	this.at3.textAlign = "center";
	this.at3.lineHeight = 23;
	this.at3.lineWidth = 54;
	this.at3.parent = this;
	this.at3.setTransform(33.1,105.9);

	this.at2 = new cjs.Text("84", "16px 'LuzSans-Book'");
	this.at2.name = "at2";
	this.at2.textAlign = "center";
	this.at2.lineHeight = 23;
	this.at2.lineWidth = 54;
	this.at2.parent = this;
	this.at2.setTransform(33.1,74.3);

	this.at1 = new cjs.Text("86", "16px 'LuzSans-Book'");
	this.at1.name = "at1";
	this.at1.textAlign = "center";
	this.at1.lineHeight = 23;
	this.at1.lineWidth = 54;
	this.at1.parent = this;
	this.at1.setTransform(33.1,44.4);

	this.text = new cjs.Text("Форма", "16px 'LuzSans-Book'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 60;
	this.text.parent = this;
	this.text.setTransform(33.9,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C4C9CE").ss(0.1,1,1).p("EgE/gj2IAAmVIKJAAIAAGVIAAEbIAAFAIAAE3IAAE6IAAFAIAAE7IAAE6IAAFCIAAEzIAAE8IAAE9IAAE8IAAE6IAAFCIAAFAIAAEbIqJAAIAAkbIKJAAEgFJgj2IAKAAIKJAAAk//XIAAkfAk//XIKJgEAk/1kIAAk3IKJAAAk/rqIAAlAIAAk6IKJAAAk/rqIKJAAAk/wqIKJAAAk/6bIAAk8AlJDNIAKAAIAAlCIAAk6IKJAAAk/DNIKJAAAk/h1IKJAAAk/R5IAAk9IAAk8IKJAAAk/R5IKJAAAk/M8IKJAAAk/IAIAAkzAk/mvIAAk7EgE/AgxIAAlCIAAk6IKJAAEgE/AgxIKJAAAk/bvIKJAAEgE/AlxIAAlAAk/W1IAAk8");
	this.shape.setTransform(33,270);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F9FA").s().p("EgFEAqMIAAkbIAAlBIKJAAIAAFBIqJAAIKJAAIAAEbgEgFEAgwIAAlBIAAk5IKJAAIAAE5IqJAAIKJAAIAAFBgAlEW2IAAk9IKJAAIAAE9gAlER5IAAk+IKJAAIAAE+gAlEM7IAAk7IKJAAIAAE7gAlEM7gAlEIAIAAkzIKJAAIAAEzgAlEDNIAAlCIAAk6IKJAAIAAE6IqJAAIKJAAIAAFCgAlEmvIAAk7IKJAAIAAE7gAlErqIAAlAIKJAAIAAFAgAlErqgAlEwqIAAk6IKJAAIAAE6gAlEwqgAFF1kIqJAAIAAk3IKJAAIAAE3gAlE1kgAlE6bIAAk8IKJgEIqJAEIAAkfIAAmVIKJAAIAAGVIqJAAIKJAAIAAEbIAAFAg");
	this.shape_1.setTransform(33.6,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.at1},{t:this.at2},{t:this.at3},{t:this.at4},{t:this.at5},{t:this.at6},{t:this.at7},{t:this.at9},{t:this.at8},{t:this.at15},{t:this.at14},{t:this.at13},{t:this.at12},{t:this.at11},{t:this.at10},{t:this.at16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stolbec_2_forma, new cjs.Rectangle(-1,-1,68.1,542), null);


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


(lib.gr_playoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.team2 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.team2.name = "team2";
	this.team2.textAlign = "right";
	this.team2.lineHeight = 29;
	this.team2.lineWidth = 121;
	this.team2.parent = this;
	this.team2.setTransform(124.5,40.6);

	this.goals2 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.goals2.name = "goals2";
	this.goals2.lineHeight = 29;
	this.goals2.lineWidth = 24;
	this.goals2.parent = this;
	this.goals2.setTransform(153.5,42.5);

	this.goals1 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.goals1.name = "goals1";
	this.goals1.textAlign = "right";
	this.goals1.lineHeight = 29;
	this.goals1.lineWidth = 24;
	this.goals1.parent = this;
	this.goals1.setTransform(177.9,2.3);

	this.team1 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.team1.name = "team1";
	this.team1.textAlign = "right";
	this.team1.lineHeight = 29;
	this.team1.lineWidth = 121;
	this.team1.parent = this;
	this.team1.setTransform(124.5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.team1},{t:this.goals1},{t:this.goals2},{t:this.team2}]}).wait(1));

	// фон
	this.fon_goal2 = new lib.fon_goal();
	this.fon_goal2.parent = this;
	this.fon_goal2.setTransform(60.8,55.7,1,1,0,0,0,62.5,17.5);
	this.fon_goal2.visible = false;

	this.fon_goal1 = new lib.fon_goal();
	this.fon_goal1.parent = this;
	this.fon_goal1.setTransform(60.8,17.2,1,1,0,0,0,62.5,17.5);
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

}).prototype = getMCSymbolPrototype(lib.gr_playoff, new cjs.Rectangle(-9.6,-4.8,215.1,86.3), null);


(lib.gr_gameday = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.team2 = new cjs.Text("", "24px 'Times New Roman'", "#000033");
	this.team2.name = "team2";
	this.team2.lineHeight = 29;
	this.team2.lineWidth = 121;
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
	this.team1.lineWidth = 120;
	this.team1.parent = this;
	this.team1.setTransform(121,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AgKA7QgEgEAAgHQAAgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAEgGAAQgGAAgEgEgAgKglQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape.setTransform(161.9,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.team1},{t:this.goals1},{t:this.goals2},{t:this.team2}]}).wait(1));

	// фон
	this.fon_goal2 = new lib.fon_goal();
	this.fon_goal2.parent = this;
	this.fon_goal2.setTransform(260.9,18.6,1,1,0,0,0,62.5,17.5);
	this.fon_goal2.visible = false;

	this.fon_goal1 = new lib.fon_goal();
	this.fon_goal1.parent = this;
	this.fon_goal1.setTransform(60.8,17.2,1,1,0,0,0,62.5,17.5);
	this.fon_goal1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fon_goal1},{t:this.fon_goal2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_gameday, new cjs.Rectangle(-1.7,-0.3,325.7,37.4), null);


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


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hist:1,turtab:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.bt_0_start.addEventListener("click", click_bt_0_start.bind(this));
		this.bt_0_hist.addEventListener("click", click_bt_0_hist.bind(this));
		
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
		this.bt_2_champ.addEventListener("click", click_bt_goto3.bind(this));
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
		if (day == 0) this.bt_3_next.addEventListener("click", click_bt_goto4.bind(this));
		
		function click_bt_goto4() {
			if (day < 7) {
				this.gotoAndStop(4);
			} else {
				this.gotoAndStop(6);
			}
		}
		//
		
		//кнопка в начало
		if (day == 0) this.bt_3_nazad.addEventListener("click", click_bt_back_0_0.bind(this));
		
		function click_bt_back_0_0()
		{
			this.gotoAndStop(0);
		}
		
		
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
				teams.Kazakhstan.group = 'B';
			} else {
				teams.Slovenia.group = 'B';
				teams.Kazakhstan.group = 'A';
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
		*/
		
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
	}
	this.frame_5 = function() {
		this.stop();
		var update = ef.bind(this);; //объект таймера
		var min; //минуты матча
		
		//if только для первого дня, чтобы не создавать новых слушателей
		if (day == 0) {
		this.bt_5_start.addEventListener("click", click_bt_5_start.bind(this));
		this.bt_5_nazad.addEventListener("click", click_bt_5_nazad.bind(this));
		this.bt_5_next.addEventListener("click", click_bt_5_next.bind(this));
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
			this.bt_5_next.visible = true;
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
	}
	this.frame_6 = function() {
		this.stop();
		var update = ef.bind(this);; //объект таймера
		var min; //минуты матча
		
		
		this.bt_6_start.addEventListener("click", click_bt_6_start.bind(this));
		
		
		//НАЖИМАЕМ КНОПКУ СТАРТ
		function click_bt_6_start() {
			this.bt_6_start.x += 150;
			
			min = 0;
			this.tf_min2.text = min;
			this.clock2.strelka.rotation = 0;
			
			this.addEventListener('tick', update);
			
			//мгновенный расчет голов
			
			
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
			}
			
			//изменение счета
		}
		
		//последний день (7) заносим в массив первые четыре команды каждой группы
		for (team in teams){
			if (teams[team].group == 'A' && teams[team].grpos < 5) {
				tA7[teams[team].grpos-1] = teams[team];
			}
			if (teams[team].group == 'B' && teams[team].grpos < 5) {
				tB7[teams[team].grpos-1] = teams[team];
			}		
		}	
		
		
		//расстановка команд по блокам
		gameBlock(this);
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

	this.text_2 = new cjs.Text("Кадр 2", "bold 30px 'Myriad Pro'", "#00FF00");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 39;
	this.text_2.lineWidth = 222;
	this.text_2.parent = this;
	this.text_2.setTransform(400.6,-51.5);

	this.bt_5_next = new lib.bt_Next();
	this.bt_5_next.parent = this;
	this.bt_5_next.setTransform(582.4,500.8);
	this.bt_5_next.visible = false;
	new cjs.ButtonHelper(this.bt_5_next, 0, 1, 1);

	this.text_3 = new cjs.Text("Финал", "24px 'Times New Roman'", "#000033");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 29;
	this.text_3.lineWidth = 77;
	this.text_3.parent = this;
	this.text_3.setTransform(667.6,59);

	this.block_8 = new lib.gr_playoff();
	this.block_8.parent = this;
	this.block_8.setTransform(696.7,438.4,1,1,0,0,0,161.1,18.4);

	this.block_7 = new lib.gr_playoff();
	this.block_7.parent = this;
	this.block_7.setTransform(697,291.9,1,1,0,0,0,161.1,18.4);

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

	this.text_4 = new cjs.Text("Playoff", "30px 'Times New Roman'", "#A90B1C");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 35;
	this.text_4.lineWidth = 100;
	this.text_4.parent = this;
	this.text_4.setTransform(774,13.7);

	this.block_1 = new lib.gr_playoff();
	this.block_1.parent = this;
	this.block_1.setTransform(186.4,138.4,1,1,0,0,0,161.1,18.4);

	this.text_5 = new cjs.Text("Кадр 6", "bold 30px 'Myriad Pro'", "#00FF00");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 39;
	this.text_5.lineWidth = 222;
	this.text_5.parent = this;
	this.text_5.setTransform(410.1,619.1);

	this.text_6 = new cjs.Text("Кадр 6", "bold 30px 'Myriad Pro'", "#00FF00");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 39;
	this.text_6.lineWidth = 222;
	this.text_6.parent = this;
	this.text_6.setTransform(400.6,-57.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000044").ss(1,1,1).p("An06TIAADmAoBlSIAAj2An9E9IAAEnAM3sEISwAAIAAFnAf0MBIAAlJANFMGISwAAAoBZ5IAAjJA6p6XISwAAA6rZ8ISpAAA6wlQISoAAA6pE9ISpAAEg6bggoMB1BAAAEg6lAgpMB1BAAA");
	this.shape.setTransform(401,309);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{text:"Кадр 0",y:-51.5,x:400.6,font:"bold 30px 'Myriad Pro'",color:"#00FF00",textAlign:"center",lineHeight:39.15,lineWidth:222}},{t:this.text,p:{x:435.8,y:644.1,text:"Кадр 0",font:"bold 30px 'Myriad Pro'",color:"#00FF00",lineHeight:39.15,lineWidth:222,textAlign:"center"}}]}).to({state:[{t:this.text_1,p:{text:"Кадр 1",y:-51.5,x:400.6,font:"bold 30px 'Myriad Pro'",color:"#00FF00",textAlign:"center",lineHeight:39.15,lineWidth:222}},{t:this.text,p:{x:436.8,y:717.8,text:"Кадр 1",font:"bold 30px 'Myriad Pro'",color:"#00FF00",lineHeight:39.15,lineWidth:222,textAlign:"center"}}]},1).to({state:[{t:this.text_2,p:{x:400.6,y:-51.5,text:"Кадр 2",font:"bold 30px 'Myriad Pro'",color:"#00FF00",textAlign:"center",lineHeight:39.15,lineWidth:222}},{t:this.text_1,p:{text:"Кадр 2",y:623.9,x:400.6,font:"bold 30px 'Myriad Pro'",color:"#00FF00",textAlign:"center",lineHeight:39.15,lineWidth:222}},{t:this.text,p:{x:663.9,y:53.4,text:"Мировой рейтинг ИИХФ 2018",font:"28px 'LuzSans-Book'",color:"#000066",lineHeight:38.8,lineWidth:269,textAlign:"center"}}]},1).to({state:[{t:this.text_1,p:{text:"Кадр 3",y:-51.5,x:400.6,font:"bold 30px 'Myriad Pro'",color:"#00FF00",textAlign:"center",lineHeight:39.15,lineWidth:222}},{t:this.text,p:{x:393.7,y:615.9,text:"Кадр 3",font:"bold 30px 'Myriad Pro'",color:"#00FF00",lineHeight:39.15,lineWidth:222,textAlign:"center"}}]},1).to({state:[{t:this.text_1,p:{text:"Кадр 4",y:-39,x:400.6,font:"bold 30px 'Myriad Pro'",color:"#00FF00",textAlign:"center",lineHeight:39.15,lineWidth:222}},{t:this.text,p:{x:400.6,y:603.7,text:"Кадр 4",font:"bold 30px 'Myriad Pro'",color:"#00FF00",lineHeight:39.15,lineWidth:222,textAlign:"center"}}]},1).to({state:[{t:this.text_1,p:{text:"Кадр 5",y:-57.7,x:400.6,font:"bold 30px 'Myriad Pro'",color:"#00FF00",textAlign:"center",lineHeight:39.15,lineWidth:222}},{t:this.text,p:{x:410.1,y:619.1,text:"Кадр 5",font:"bold 30px 'Myriad Pro'",color:"#00FF00",lineHeight:39.15,lineWidth:222,textAlign:"center"}},{t:this.bt_5_next}]},1).to({state:[{t:this.shape},{t:this.text_6},{t:this.text_5},{t:this.block_1},{t:this.text_4},{t:this.block_2},{t:this.block_3},{t:this.block_4},{t:this.block_5},{t:this.block_6},{t:this.block_7},{t:this.block_8},{t:this.text_3},{t:this.text_2,p:{x:738.3,y:388.4,text:"3 место",font:"24px 'Times New Roman'",color:"#000033",textAlign:"right",lineHeight:28.6,lineWidth:92}},{t:this.text_1,p:{text:"1/2 финала",y:59,x:447.1,font:"24px 'Times New Roman'",color:"#000033",textAlign:"right",lineHeight:28.6,lineWidth:127}},{t:this.text,p:{x:188.8,y:59,text:"1/4 финала",font:"24px 'Times New Roman'",color:"#000033",lineHeight:28.6,lineWidth:127,textAlign:"right"}}]},1).wait(1));

	// кнопка
	this.bt_6_start = new lib.bt_Start();
	this.bt_6_start.parent = this;
	this.bt_6_start.setTransform(48.6,534);
	this.bt_6_start._off = true;
	new cjs.ButtonHelper(this.bt_6_start, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.bt_6_start).wait(6).to({_off:false},0).wait(1));

	// clock
	this.clock2 = new lib.clock();
	this.clock2.parent = this;
	this.clock2.setTransform(703.2,181.4,0.684,0.684,0,0,0,0.2,0.1);

	this.tf_min2 = new cjs.Text("", "30px 'Arial'", "#FF0000");
	this.tf_min2.name = "tf_min2";
	this.tf_min2.textAlign = "center";
	this.tf_min2.lineHeight = 36;
	this.tf_min2.lineWidth = 59;
	this.tf_min2.parent = this;
	this.tf_min2.setTransform(592.2,128.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tf_min2},{t:this.clock2}]},6).wait(1));

	// часы
	this.clock = new lib.clock();
	this.clock.parent = this;
	this.clock.setTransform(420.1,440.8,1.053,1.053);
	this.clock._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clock).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

	// кнопка
	this.bt_5_nazad = new lib.bt_Nazad();
	this.bt_5_nazad.parent = this;
	this.bt_5_nazad.setTransform(582.5,438.2);
	new cjs.ButtonHelper(this.bt_5_nazad, 0, 1, 1);

	this.bt_5_start = new lib.bt_Start();
	this.bt_5_start.parent = this;
	this.bt_5_start.setTransform(582.5,374.6);
	new cjs.ButtonHelper(this.bt_5_start, 0, 1, 1);

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
	this.text_7 = new cjs.Text("* - овертайм, буллиты", "18px 'Arial'", "#000033");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 22;
	this.text_7.lineWidth = 233;
	this.text_7.parent = this;
	this.text_7.setTransform(143.6,362.8);

	this.tf_min = new cjs.Text("", "30px 'Arial'", "#FF0000");
	this.tf_min.name = "tf_min";
	this.tf_min.textAlign = "center";
	this.tf_min.lineHeight = 36;
	this.tf_min.lineWidth = 59;
	this.tf_min.parent = this;
	this.tf_min.setTransform(420.5,547.7);

	this.dayN = new cjs.Text("", "19px 'Courier New'", "#000066");
	this.dayN.name = "dayN";
	this.dayN.textAlign = "center";
	this.dayN.lineHeight = 24;
	this.dayN.lineWidth = 37;
	this.dayN.parent = this;
	this.dayN.setTransform(771.9,24.3);

	this.text_8 = new cjs.Text("День", "19px 'Courier New'", "#FFFFFF");
	this.text_8.lineHeight = 24;
	this.text_8.lineWidth = 50;
	this.text_8.parent = this;
	this.text_8.setTransform(699,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000044").ss(1,1,1).p("AxQAAMAihAAA");
	this.shape_1.setTransform(134.6,345);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AorjKIAAGVAIsjKIxUAAAonDLIRTAA");
	this.shape_2.setTransform(745.3,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text_8},{t:this.dayN},{t:this.tf_min},{t:this.text_7}]},5).to({state:[]},1).wait(1));

	// текст
	this.text_9 = new cjs.Text("Группа B", "22px 'Times New Roman'", "#000066");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 26;
	this.text_9.lineWidth = 146;
	this.text_9.parent = this;
	this.text_9.setTransform(588.4,56.5);

	this.text_10 = new cjs.Text("Группа A", "22px 'Times New Roman'", "#000066");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 26;
	this.text_10.lineWidth = 146;
	this.text_10.parent = this;
	this.text_10.setTransform(212.9,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_10},{t:this.text_9}]},5).to({state:[]},1).wait(1));

	// Слой 2
	this.DayNumber = new lib.Day();
	this.DayNumber.parent = this;
	this.DayNumber.setTransform(397.4,239.7,1,1,0,0,0,180,22.8);
	this.DayNumber._off = true;

	this.timeline.addTween(cjs.Tween.get(this.DayNumber).wait(4).to({_off:false},0).to({_off:true},1).wait(2));

	// разметка
	this.bt_3_next = new lib.bt_Next();
	this.bt_3_next.parent = this;
	this.bt_3_next.setTransform(540.4,544.1);
	new cjs.ButtonHelper(this.bt_3_next, 0, 1, 1);

	this.bt_3_nazad = new lib.bt_Nazad();
	this.bt_3_nazad.parent = this;
	this.bt_3_nazad.setTransform(90.4,544.1);
	new cjs.ButtonHelper(this.bt_3_nazad, 0, 1, 1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000066").ss(1,1,1).p("EAxAgnqIAAHYIgCfYEAxcAA6IAAHZIgCfXEAmEgnlIAAHTIywAAIAAfZISwAAIK4AAEATUgnqIAAHYIuEAAIuDAAIAAfaIODAAIOEgBEAFQgnoIAAHWIAAfaEgIzgnqIAAHYIq8AAIAAfaIK8AAAFsITIuDAAIAAfZIODAAIOEAAISwAAIK4AAAoXA6IAAHZIq8AAIAAfZIK8AAAFsA9IAAHWIAAfZEAmgAITIywAAIuEAAEAmgABAIAAHTIAAfZATwA6IAAHZIAAfZAoXA6IcHAAIdpgBEgIzgnqIcHAAIdqgCEAmEggSIAAfZEgTvgnqIAAHYI9sAAIAAnYIdsAAIK8AAEgw/AITIAAnZIdsAAIAAHZI9sAAIACfaIdqgBEgxbggSIACfbIdqgBAzTA6IK8AAEAxcAITIq8AAEAxAggSIq8AA");
	this.shape_3.setTransform(393,278.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.bt_3_nazad},{t:this.bt_3_next}]},3).to({state:[]},1).wait(3));

	// подписи
	this.text_11 = new cjs.Text("Команда", "15px 'Arial'", "#000066");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 19;
	this.text_11.lineWidth = 154;
	this.text_11.parent = this;
	this.text_11.setTransform(174.8,294.7);

	this.text_12 = new cjs.Text("Очки", "15px 'Arial'", "#000066");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 19;
	this.text_12.lineWidth = 49;
	this.text_12.parent = this;
	this.text_12.setTransform(675.5,296.1);

	this.text_13 = new cjs.Text("Шайбы", "15px 'Arial'", "#000066");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 19;
	this.text_13.lineWidth = 82;
	this.text_13.parent = this;
	this.text_13.setTransform(579,296.1);

	this.text_14 = new cjs.Text("Поражения", "15px 'Arial'", "#000066");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 19;
	this.text_14.lineWidth = 78;
	this.text_14.parent = this;
	this.text_14.setTransform(474.2,294.7);

	this.text_15 = new cjs.Text("Победы", "15px 'Arial'", "#000066");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 19;
	this.text_15.lineWidth = 66;
	this.text_15.parent = this;
	this.text_15.setTransform(385,294.7);

	this.text_16 = new cjs.Text("Игры", "15px 'Arial'", "#000066");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 19;
	this.text_16.lineWidth = 39;
	this.text_16.parent = this;
	this.text_16.setTransform(305.3,294.7);

	this.text_17 = new cjs.Text("Команда", "15px 'Arial'", "#000066");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 19;
	this.text_17.lineWidth = 154;
	this.text_17.parent = this;
	this.text_17.setTransform(172.1,35);

	this.text_18 = new cjs.Text("Очки", "15px 'Arial'", "#000066");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 19;
	this.text_18.lineWidth = 49;
	this.text_18.parent = this;
	this.text_18.setTransform(672.8,36.4);

	this.text_19 = new cjs.Text("Шайбы", "15px 'Arial'", "#000066");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 19;
	this.text_19.lineWidth = 82;
	this.text_19.parent = this;
	this.text_19.setTransform(576.3,36.4);

	this.text_20 = new cjs.Text("Поражения", "15px 'Arial'", "#000066");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 19;
	this.text_20.lineWidth = 78;
	this.text_20.parent = this;
	this.text_20.setTransform(471.5,35);

	this.text_21 = new cjs.Text("Победы", "15px 'Arial'", "#000066");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 19;
	this.text_21.lineWidth = 66;
	this.text_21.parent = this;
	this.text_21.setTransform(382.2,35);

	this.text_22 = new cjs.Text("Игры", "15px 'Arial'", "#000066");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 19;
	this.text_22.lineWidth = 39;
	this.text_22.parent = this;
	this.text_22.setTransform(302.6,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11}]},3).to({state:[]},1).wait(3));

	// столбцы
	this.grB8 = new lib.group();
	this.grB8.parent = this;
	this.grB8.setTransform(394.4,519.5,1,1,0,0,0,314.5,12.5);

	this.grB7 = new lib.group();
	this.grB7.parent = this;
	this.grB7.setTransform(394.4,494.5,1,1,0,0,0,314.5,12.5);

	this.grB6 = new lib.group();
	this.grB6.parent = this;
	this.grB6.setTransform(394.4,469.5,1,1,0,0,0,314.5,12.5);

	this.grB5 = new lib.group();
	this.grB5.parent = this;
	this.grB5.setTransform(394.4,444.5,1,1,0,0,0,314.5,12.5);

	this.grB4 = new lib.group();
	this.grB4.parent = this;
	this.grB4.setTransform(394.4,419.5,1,1,0,0,0,314.5,12.5);

	this.grB3 = new lib.group();
	this.grB3.parent = this;
	this.grB3.setTransform(394.4,394.5,1,1,0,0,0,314.5,12.5);

	this.grB2 = new lib.group();
	this.grB2.parent = this;
	this.grB2.setTransform(394.4,369.5,1,1,0,0,0,314.5,12.5);

	this.grB1 = new lib.group();
	this.grB1.parent = this;
	this.grB1.setTransform(394.4,344.5,1,1,0,0,0,314.5,12.5);

	this.grA8 = new lib.group();
	this.grA8.parent = this;
	this.grA8.setTransform(391.7,259.8,1,1,0,0,0,314.5,12.5);

	this.grA7 = new lib.group();
	this.grA7.parent = this;
	this.grA7.setTransform(391.7,234.8,1,1,0,0,0,314.5,12.5);

	this.grA6 = new lib.group();
	this.grA6.parent = this;
	this.grA6.setTransform(391.7,209.8,1,1,0,0,0,314.5,12.5);

	this.grA5 = new lib.group();
	this.grA5.parent = this;
	this.grA5.setTransform(391.7,184.8,1,1,0,0,0,314.5,12.5);

	this.grA4 = new lib.group();
	this.grA4.parent = this;
	this.grA4.setTransform(391.7,159.8,1,1,0,0,0,314.5,12.5);

	this.grA3 = new lib.group();
	this.grA3.parent = this;
	this.grA3.setTransform(391.7,134.8,1,1,0,0,0,314.5,12.5);

	this.grA2 = new lib.group();
	this.grA2.parent = this;
	this.grA2.setTransform(391.7,109.8,1,1,0,0,0,314.5,12.5);

	this.grA1 = new lib.group();
	this.grA1.parent = this;
	this.grA1.setTransform(391.7,84.8,1,1,0,0,0,314.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.grA1},{t:this.grA2},{t:this.grA3},{t:this.grA4},{t:this.grA5},{t:this.grA6},{t:this.grA7},{t:this.grA8},{t:this.grB1},{t:this.grB2},{t:this.grB3},{t:this.grB4},{t:this.grB5},{t:this.grB6},{t:this.grB7},{t:this.grB8}]},3).to({state:[]},1).wait(3));

	// кнопка
	this.bt_2_champ = new lib.bt_2_champ();
	this.bt_2_champ.parent = this;
	this.bt_2_champ.setTransform(588.3,236.3);
	new cjs.ButtonHelper(this.bt_2_champ, 0, 1, 1);

	this.bt_2_nazad = new lib.bt_Nazad();
	this.bt_2_nazad.parent = this;
	this.bt_2_nazad.setTransform(588.3,295.7);
	new cjs.ButtonHelper(this.bt_2_nazad, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bt_2_nazad},{t:this.bt_2_champ}]},2).to({state:[]},1).wait(4));

	// столбцы
	this.stolbec_2_moral = new lib.stolbec_2_moral();
	this.stolbec_2_moral.parent = this;
	this.stolbec_2_moral.setTransform(497.8,304.2,1,1,0,0,0,33,270);

	this.stolbec_forma = new lib.stolbec_2_forma();
	this.stolbec_forma.parent = this;
	this.stolbec_forma.setTransform(432.6,304.2,1,1,0,0,0,33,270);

	this.stolbec_mr = new lib.stolbec_2_mr();
	this.stolbec_mr.parent = this;
	this.stolbec_mr.setTransform(237.1,304.2,1,1,0,0,0,33,270);

	this.st_ob = new lib.stolbec_2_oborona();
	this.st_ob.parent = this;
	this.st_ob.setTransform(367.4,304.2,1,1,0,0,0,33,270);

	this.st_att = new lib.stolbec_2_ataka();
	this.st_att.parent = this;
	this.st_att.setTransform(302.2,304.2,1,1,0,0,0,33,270);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.country, null, new cjs.Matrix2D(0.984,0,0,0.984,-66.1,-251.4)).s().p("EgKRAnQMAAAhOKIUgAAIAAgUIADAAMAAABOeg");
	this.shape_4.setTransform(139.2,323.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,51,204,0.349)").s().p("A5YDLIAAgdIgGAAIAAhRIgGAAIAAknMAzJAAAIAAGVg");
	this.shape_5.setTransform(367.8,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.st_att},{t:this.st_ob},{t:this.stolbec_mr},{t:this.stolbec_forma},{t:this.stolbec_2_moral}]},2).to({state:[]},1).wait(4));

	// hist
	this.bt_1_nazad = new lib.bt_Nazad();
	this.bt_1_nazad.parent = this;
	this.bt_1_nazad.setTransform(330.3,535.7);
	new cjs.ButtonHelper(this.bt_1_nazad, 0, 1, 1);

	this.text_23 = new cjs.Text("График движения сборных в рейтинге с 2003 по 2017 годы ", "bold 20px 'Myriad Pro'", "#000099");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 27;
	this.text_23.lineWidth = 607;
	this.text_23.parent = this;
	this.text_23.setTransform(395,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.history, null, new cjs.Matrix2D(0.777,0,0,0.777,-404.5,-210.2)).s().p("EAHrAg3IAAgVMhEDAAAIAAioICgAAIAAjhIhzAAIAAjhIBzAAIAAjOIigAAIAAjEICgAAIAAjyIigAAIAAisICkAAIAAjkIikAAIAAjRICgAAIAAjVIigAAIAAjQICkAAIAAjFIikAAIAAjZICgAAIAAjRIigAAIAAjVICcAAIAAjRIicAAIAAjWICgAAIAAjdIigAAIAAmbMB4xAAAIAAGQIipAAIAADnICVAAIAADHIiQAAIAADnICVAAIAADIIiaAAIAADXICaAAIAADIIAPAAIAAAPIikAAIAADmICkAAIAACkIipAAIAADlICpAAIAADIIipAAIAADHIBnAAIAADsIhsAAIAADNICuAAIAADSIikAAIAADcICLAAIAADNIiQAAIAADhICpAAIAACuIquAAIAAAQg");
	this.shape_6.setTransform(404.5,310.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.text_23},{t:this.bt_1_nazad}]},1).to({state:[]},1).wait(5));

	// таблица
	this.instance = new lib.Kazakhstan();
	this.instance.parent = this;
	this.instance.setTransform(321,535);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_7.setTransform(502.6,568.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgpAyQgLgJAAgOQABgIAEgHQADgIAGgDQAGgEAIgCIARgCQAXgDALgFIAAgFQAAgLgFgFQgIgGgOAAQgNAAgHAEQgGAFgDAMIgTgDQACgLAHgIQAFgHAMgEQAKgFAOAAQAPABAJADQAJADAFAFQADAFACAJIABASIAAAYQAAAbACAIQABAGADAHIgTAAQgDgGgCgIQgKAJgKAEQgJAEgLgBQgUAAgJgJgAgDAHQgNACgEACQgGACgCAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEAEgJQADgGAAgNIAAgHQgLAEgTADg");
	this.shape_8.setTransform(490.3,568.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AgIA5IAAhhIglAAIAAgQIBbAAIAAAQIglAAIAABhg");
	this.shape_9.setTransform(479.2,568.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AgiAtQgPgQAAgcQAAgSAGgOQAHgOAMgGQANgIANAAQATAAAMAKQAMAJADARIgTADQgDgLgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJAKQAJALANAAQALgBAIgGQAIgIACgOIATADQgDATgNALQgNALgTAAQgWAAgOgOg");
	this.shape_10.setTransform(469,568.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AAeA5IgYgkIgGgJIgdAtIgXAAIApg7Igmg2IAYAAIASAaIAHAOIAIgNIAUgbIAWAAIgnA1IAqA8g");
	this.shape_11.setTransform(457.7,568.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AgpAyQgKgJAAgOQAAgIADgHQAEgIAGgDQAHgEAHgCIASgCQAWgDALgFIAAgFQAAgLgFgFQgIgGgOAAQgNAAgHAEQgGAFgEAMIgSgDQADgLAFgIQAGgHAMgEQALgFANAAQAPABAJADQAJADAFAFQADAFADAJIABASIAAAYQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgLgBQgTAAgKgJgAgDAHQgNACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgKAEgUADg");
	this.shape_12.setTransform(446,568.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AgrAZIASgEQADALAHAGQAIAGAJAAQAJAAAHgFQAGgGAAgJQAAgHgEgFQgEgEgEgCIgQgBIgFAAIAAgNIAQgBQAFgCAEgEQAEgEAAgGQAAgJgGgEQgFgFgIAAQgPAAgHATIgSgCQAIghAgAAQASAAALAKQAKAKAAAOQAAAOgNAIQAIAEAEAHQAFAIAAAJQAAAPgLAKQgMAJgUAAQgmABgGgjg");
	this.shape_13.setTransform(434.7,568.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("AgqAyQgJgJgBgOQAAgIAFgHQADgIAHgDQAFgEAIgCIARgCQAXgDALgFIAAgFQAAgLgFgFQgIgGgOAAQgNAAgGAEQgHAFgDAMIgTgDQACgLAHgIQAFgHAMgEQAKgFAOAAQAPABAJADQAJADAFAFQAEAFABAJIABASIAAAYQAAAbABAIQACAGAEAHIgUAAQgDgGgCgIQgKAJgKAEQgJAEgLgBQgUAAgKgJgAgDAHQgNACgEACQgFACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAIgEAFgJQADgGAAgNIAAgHQgLAEgTADg");
	this.shape_14.setTransform(423.6,568.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000099").s().p("AAdBPIgbgrQgJgSgIgGQgHgHgLAAIAABKIgVAAIAAidIAVAAIAABFQAOAAAFgFQAHgGAIgVQAGgPAEgHQAEgGAIgEQAJgFAIAAIAOAAIAAASIgFAAIgEAAQgKAAgFAFQgFAFgGAQQgIAUgGAFQgFAFgHADQAOADAPAYIAhA1g");
	this.shape_15.setTransform(412.1,565.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000099").s().p("AAfA5IAAgsIgLAAQgLgBgEADQgFADgJAOIgRAZIgYAAIAVgfQAKgOAJgBQgQgDgJgJQgIgJAAgNQAAgPALgJQALgJAUAAIA0AAIAABxgAgRgiQgFAFgBAHQABAKAGAFQAIAEARAAIAWAAIAAglIgcAAQgQAAgEAGg");
	this.shape_16.setTransform(472.5,532.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_17.setTransform(460.9,532.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000099").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAvIA1AAIAAgvIATAAIAABxg");
	this.shape_18.setTransform(448.7,532.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000099").s().p("AglAsQgOgPAAgcQAAgcAOgQQAPgPAXAAQAXAAAOAPQAOAPAAAcIAAAFIhTAAQABASAJAKQAKAKANAAQALABAHgGQAIgFAEgMIAUABQgFASgNAKQgMAJgUAAQgYAAgPgPgAgUgiQgKAJAAAPIA+AAQgBgPgGgGQgJgMgPAAQgMAAgJAJg");
	this.shape_19.setTransform(436.4,532.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000099").s().p("AguA5IAAhxIAsAAQAQAAAIACQAIAEAGAHQAFAHAAAKQAAAJgCAFQgEAHgHADQAIACAFAHQAGAIAAAKQgBARgLAHQgLAIgUAAgAgbApIAaAAQAPAAAHgDQAFgFABgJQAAgGgEgEQgDgFgGgBIgRgBIgYAAgAgbgIIAVAAQAMAAAEgCQAEgBAFgDQADgFAAgFQAAgJgHgEQgGgDgOAAIgWAAg");
	this.shape_20.setTransform(424.8,532.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000099").s().p("AgmAsQgOgPAAgdQAAgeARgQQAPgMAUAAQAYAAAPAPQAOAPAAAbQAAAWgGAMQgHANgMAGQgNAIgPgBQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKAKANAAQAOAAAKgLQAKgKAAgWQAAgVgKgKQgKgLgOAAQgNAAgKAKg");
	this.shape_21.setTransform(412.5,532.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000099").s().p("Ag3A4IAAgPIAJAAQAGAAACgCQADgBABgDQABgDAAgPIAAhJIBZAAIAABwIgUAAIAAhhIgyAAIAAA5QAAATgBAHQgCAGgFAFQgGAEgLAAIgQgBg");
	this.shape_22.setTransform(399.4,532.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000099").s().p("AgkBHQgQgKgIgUQgJgUAAgVQAAgZAKgSQAKgSAQgKQASgJAUAAQAYAAAPAMQARAMAGAVIgVAFQgFgRgLgIQgKgIgPAAQgSAAgMAJQgMAJgFAPQgFAOAAAQQAAATAGAPQAFAPANAHQANAIANAAQARAAANgKQAMgLAEgTIAVAFQgHAZgRAOQgRANgYAAQgZAAgQgKg");
	this.shape_23.setTransform(385.7,530.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgLABgEACQgFADgJAOIgRAZIgYAAIAVgeQAKgPAJgBQgQgDgJgIQgHgKgBgNQAAgPALgJQAKgJAVAAIA0AAIAABxgAgSgiQgEAEgBAIQABAKAGAFQAIAFARgBIAWAAIAAglIgcAAQgQAAgFAGg");
	this.shape_24.setTransform(427.6,498.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_25.setTransform(416,498.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000099").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_26.setTransform(403.8,498.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000099").s().p("AgpAyQgKgJAAgOQAAgIADgIQAEgHAGgDQAHgEAHgCIASgCQAWgDALgFIAAgFQAAgLgFgFQgIgGgOAAQgNAAgHAEQgGAFgEAMIgSgDQADgLAFgIQAGgHAMgEQALgFANAAQAPABAJADQAJADAFAFQADAFADAJIABASIAAAYQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMgBQgTAAgJgJgAgEAHQgMACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_27.setTransform(391.5,498.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000099").s().p("AA0BhIAAgkIhnAAIAAAkIgTAAIAAg3IAMAAQAUgdAAhWIAAgXIBeAAIAACKIAPAAIAAA3gAgShGQAAAVgEAiQgEAjgKAWIBHAAIAAh4Ig1AAg");
	this.shape_28.setTransform(377.6,498);

	this.instance_1 = new lib.Slovenia();
	this.instance_1.parent = this;
	this.instance_1.setTransform(303,500);

	this.instance_2 = new lib.Denmark();
	this.instance_2.parent = this;
	this.instance_2.setTransform(283,465);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgLAAgEADQgFADgJAOIgRAZIgYAAIAVgeQAKgPAJgCQgQgCgJgIQgIgKAAgNQAAgOALgKQAKgJAVAAIA0AAIAABxgAgSgjQgEAFgBAIQABAKAGAFQAIAFARAAIAWAAIAAgmIgcAAQgQAAgFAFg");
	this.shape_29.setTransform(419,462.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000099").s().p("AAcA5IAAhVIg1BVIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_30.setTransform(407.5,462.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000099").s().p("AAkBJIAAggIhXAAIAAhxIATAAIAABhIA0AAIAAhhIAUAAIAABhIAMAAIAAAwg");
	this.shape_31.setTransform(395.4,463.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000099").s().p("AAbA5IAAgyIg1AAIAAAyIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_32.setTransform(382.6,462.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000099").s().p("AgpAzQgKgKAAgOQAAgIADgIQAEgHAGgEQAHgCAHgDIASgDQAWgCALgFIAAgEQAAgMgFgFQgIgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAFgHQAGgIAMgDQALgEANgBQAPAAAJAEQAJADAFAGQADAFADAHIABASIAAAZQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMAAQgSgBgKgIgAgEAHQgMACgFACQgEACgDAEQgDAFAAAFQAAAHAGAFQAGAGALgBQAKABAJgGQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_33.setTransform(370.4,462.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000099").s().p("AgwBQIAAidIARAAIAAAPQAHgIAHgFQAIgEAKAAQAPAAALAIQALAHAGANQAFAOABAQQAAASgHANQgGAOgMAHQgMAIgNAAQgJAAgIgEQgHgEgFgGIAAA3gAgVg0QgKALAAAWQAAAVAJAKQAJALAMAAQAMAAAKgLQAJgLAAgWQAAgVgJgLQgJgLgMAAQgMAAgJAMg");
	this.shape_34.setTransform(358.5,464.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000099").s().p("AgJBQIAAgVQgcgBgSgQQgTgQAAgaQAAgZATgQQASgQAcgBIAAgVIATAAIAAAVQAeACARAQQASAQAAAYQAAAYgRARQgRARgfABIAAAVgAAKAqQAUgBAMgMQALgKAAgTQAAgSgLgKQgMgLgUgBgAgogcQgMAKAAASQAAATAMAKQALALAUABIAAhRQgTAAgMAMg");
	this.shape_35.setTransform(343.7,460);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKABgFACQgFADgJAOIgRAZIgXAAIAUgeQAKgPAJgBQgQgDgJgIQgHgKgBgNQAAgPALgJQAKgJAVAAIA0AAIAABxgAgSgiQgEAEAAAIQAAAKAGAFQAIAFARgBIAWAAIAAglIgbAAQgRAAgFAGg");
	this.shape_36.setTransform(393.5,427.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_37.setTransform(381.9,427.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000099").s().p("AguA5IAAhxIAtAAQAPAAAIADQAIACAGAIQAGAHgBAKQAAAJgDAFQgDAHgHADQAIADAFAHQAGAHAAAKQgCAQgKAIQgLAIgUAAgAgaApIAZAAQAQAAAFgDQAHgEAAgKQAAgGgEgEQgDgFgGgBIgRgBIgXAAgAgagIIAUAAQALAAAFgBQAFgCAEgEQADgDAAgGQAAgJgGgDQgHgEgPAAIgUAAg");
	this.shape_38.setTransform(370.2,427.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000099").s().p("AgJA5IAAhhIglAAIAAgQIBdAAIAAAQIgmAAIAABhg");
	this.shape_39.setTransform(359,427.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000099").s().p("AgpAyQgKgJAAgOQAAgIADgHQAEgIAGgDQAHgEAHgCIASgCQAWgDALgFIAAgFQAAgLgFgFQgIgGgOAAQgNAAgHAEQgGAFgEAMIgSgCQADgMAGgIQAFgHAMgEQALgFANAAQAPABAJADQAJADAFAFQADAGACAIIACASIAAAYQAAAbABAIQABAGADAHIgTAAQgDgGgBgIQgMAJgJAEQgJAEgLgBQgUAAgJgJgAgDAHQgNACgEACQgFACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEAEgJQADgGAAgNIAAgHQgLAEgTADg");
	this.shape_40.setTransform(347.8,427.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000099").s().p("Ag+BOIAEgTQAFACAEABQAHgBAEgFQADgGAAgTIAAhuIBhAAIAACdIgUAAIAAiLIg4AAIAABQQAAAagDALQgCAMgHAGQgHAGgMAAQgHAAgKgCg");
	this.shape_41.setTransform(333.7,425.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKABgFACQgFADgJAOIgRAZIgXAAIAUgeQAJgPAKgBQgRgDgIgIQgHgKAAgNQgBgOALgKQALgJATAAIA1AAIAABxgAgSgiQgEAEAAAIQgBAKAIAFQAHAFARgBIAWAAIAAglIgbAAQgQAAgGAGg");
	this.shape_42.setTransform(383.3,394.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000099").s().p("AAbA5IAAhVIg0BVIgVAAIAAhxIATAAIAABWIA1hWIAVAAIAABxg");
	this.shape_43.setTransform(371.8,394.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000099").s().p("AAUA5IgUgkQgGgKgEgDQgFgEgHAAIAAA1IgTAAIAAhxIATAAIAAAxQAKAAADgDQAEgEAGgRQAGgOAEgEQADgEAFgBQAEgCALAAIADAAIAAAQIgFAAQgIAAgCACIgHAOQgEALgEAFQgDAEgHAEQAMACAMATIAVAkg");
	this.shape_44.setTransform(361.6,394.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000099").s().p("AgpAyQgLgJABgOQAAgIADgIQAEgGAGgEQAHgDAHgDIASgCQAWgEALgEIAAgEQAAgMgGgFQgHgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAFgHQAGgHALgEQAMgFANAAQAPABAJADQAJADAEAGQAEAEADAJIABARIAAAZQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJADgMAAQgSAAgKgJgAgEAHQgLACgGACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_45.setTransform(349.8,394.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000099").s().p("AguA5IAAhxIAsAAQAQAAAIADQAIACAGAIQAGAHgBAKQAAAJgCAFQgEAGgHAFQAIABAFAIQAGAHAAAKQgCAQgKAIQgKAIgVAAgAgaApIAZAAQAQAAAFgEQAGgDABgKQAAgFgEgFQgDgEgGgCIgRgBIgXAAgAgagIIAUAAQALAAAFgBQAEgCAFgEQADgDAAgGQAAgJgHgDQgGgEgOAAIgVAAg");
	this.shape_46.setTransform(338.2,394.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000099").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPAAQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOAAAKgMQAKgKAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_47.setTransform(325.8,394.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000099").s().p("Ag3A5IAAgQIAJAAQAGgBACgBQADgBABgDQABgDAAgPIAAhJIBZAAIAABxIgUAAIAAhhIgyAAIAAA3QAAAUgBAGQgCAHgFAEQgGAGgLAAIgQgBg");
	this.shape_48.setTransform(312.7,394.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000099").s().p("AgkBHQgQgKgIgUQgJgUABgVQgBgZAKgSQAJgSASgKQARgJAUAAQAYAAAPAMQAQAMAHAVIgVAFQgFgRgKgIQgLgIgPAAQgSAAgMAJQgMAJgFAPQgFAOAAAQQAAATAGAPQAGAPAMAHQANAIANAAQARAAANgKQAMgLAEgTIAUAFQgGAZgRAOQgRANgYAAQgZAAgQgKg");
	this.shape_49.setTransform(299.1,391.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000099").s().p("AguA5IAAhxIAUAAIAAAsIAYAAQAXAAANAKQANAIAAAQQAAAPgLAKQgKAKgZAAgAgaApIAUAAQARAAAIgEQAIgFAAgKQAAgHgGgFQgGgHgTABIgWAAg");
	this.shape_50.setTransform(368.1,358.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000099").s().p("AgiAtQgPgQAAgcQAAgSAGgOQAHgOAMgGQANgIANAAQATAAAMAKQAMAJADARIgTADQgDgLgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJAKQAJAKANAAQALAAAIgGQAIgIACgOIATADQgDATgNAMQgNALgTgBQgWABgOgPg");
	this.shape_51.setTransform(356.8,358.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000099").s().p("AgpBOIgCgSIALABQAGAAAEgCIAGgGIAGgOIACgFIgrhxIAVAAIAXBCIAIAZQADgMAFgNIAYhCIATAAIgrBzIgKAaQgFAJgHAFQgGAEgKAAQgFAAgHgCg");
	this.shape_52.setTransform(345.5,361.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000099").s().p("AgxBQIAAicIASAAIAAAOQAHgIAHgFQAIgEAKAAQAPAAALAHQALAIAGAOQAGAOgBAPQAAASgFANQgHAOgMAIQgMAHgNAAQgJAAgHgEQgIgEgFgHIAAA4gAgWg1QgJAMAAAWQAAAVAJALQAJAKANAAQALAAAJgKQAKgLAAgXQAAgWgJgKQgJgLgMAAQgMAAgKALg");
	this.shape_53.setTransform(334.1,360.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000099").s().p("AgqAyQgKgJABgOQAAgJADgGQAEgIAGgDQAHgDAHgDIASgCQAWgEALgDIAAgGQAAgMgGgEQgHgGgOAAQgNgBgHAFQgGAFgEAMIgSgCQADgMAFgIQAGgHALgFQALgEAOAAQAPABAJADQAJADAEAFQAEAGADAIIABASIAAAYQAAAbABAHQABAIAEAGIgVAAQgDgGAAgIQgLAJgKAEQgJAEgMgBQgSABgLgKgAgEAHQgLACgGACQgFACgCAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgHAAgMIAAgHQgLAEgUADg");
	this.shape_54.setTransform(321.5,358.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000099").s().p("Ag3A4IAAgPIAJAAQAGAAACgCQADgBABgDQABgDAAgPIAAhJIBZAAIAABwIgUAAIAAhgIgyAAIAAA4QAAATgBAHQgCAGgFAEQgGAFgLABIgQgCg");
	this.shape_55.setTransform(308.4,358.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000099").s().p("AgkAsQgPgQgBgbQABgcAPgQQAOgQAXAAQAWAAAPAQQAPAPAAAcIAAAFIhVAAQABATAKAJQAJAKAOAAQAKABAIgGQAIgFAEgMIAUABQgEASgNAKQgNAJgUAAQgYAAgOgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgNAAgJAJg");
	this.shape_56.setTransform(296.4,358.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000099").s().p("Ag6BPIAAidIBlAAIAAATIhQAAIAAAwIAlAAQAUAAAMAEQANAEAHAKQAHALAAAPQAAAMgFAKQgFALgLAGQgKAHgaAAgAglA9IAoAAQARAAAJgHQAIgHAAgNQAAgKgFgHQgFgGgIgDQgJgCgUAAIgbAAg");
	this.shape_57.setTransform(283.6,356.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000099").s().p("AAfA5IAAgsIgLAAQgKgBgFADQgFADgJAOIgRAZIgXAAIAUgfQAJgOAKgBQgRgDgIgJQgHgJAAgNQgBgPALgJQALgJATAAIA0AAIAABxgAgSgjQgEAGAAAHQgBAKAIAFQAHAEARABIAWAAIAAgmIgbAAQgQAAgGAFg");
	this.shape_58.setTransform(344.2,323.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000099").s().p("AAbA5IAAhWIg0BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_59.setTransform(332.6,323.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000099").s().p("AggA5IAAhxIBBAAIAAAQIgtAAIAABhg");
	this.shape_60.setTransform(323.2,323.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000099").s().p("AgkAsQgPgPgBgcQABgcAPgQQAOgPAXAAQAWAAAPAPQAPAPAAAcIAAAFIhVAAQABATAKAJQAKALANgBQAKABAIgGQAHgFAFgMIAUACQgEARgNAKQgNAJgUAAQgYAAgOgPgAgUgiQgKAJgBAPIBAAAQgCgPgGgGQgJgMgPAAQgNAAgIAJg");
	this.shape_61.setTransform(312.3,323.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000099").s().p("AguA5IAAhxIAtAAQAPAAAIACQAIAEAGAGQAGAIAAAKQAAAJgEAFQgDAGgHAEQAIADAGAGQAFAIAAAKQgBARgLAHQgKAIgUAAgAgbApIAaAAQAQAAAFgDQAHgFAAgJQAAgFgDgFQgEgEgGgCIgRgBIgYAAgAgbgIIAVAAQALAAAFgCQAFgBADgDQAEgEAAgGQAAgJgGgEQgHgDgPAAIgVAAg");
	this.shape_62.setTransform(300.7,323.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000099").s().p("AgxBQIAAicIASAAIAAAOQAHgIAHgFQAIgEAKAAQAPAAALAHQALAIAGANQAFAOAAARQAAARgFANQgHAOgMAIQgMAHgNAAQgJAAgHgEQgIgEgFgGIAAA3gAgWg1QgJAMAAAWQAAAVAJALQAJAKANAAQAMAAAIgKQAKgMAAgVQAAgXgJgKQgJgLgMAAQgMAAgKALg");
	this.shape_63.setTransform(288.7,325.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000099").s().p("AgmAsQgOgPAAgdQAAgeARgQQAPgMAUAAQAYAAAPAPQAOAPAAAbQAAAWgGAMQgHAMgMAHQgNAIgPgBQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKAKANAAQAOABAKgMQAKgKAAgWQAAgVgKgKQgKgLgOAAQgNgBgKALg");
	this.shape_64.setTransform(276.1,323.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000099").s().p("AApBPIAAhKIhRAAIAABKIgVAAIAAidIAVAAIAABBIBRAAIAAhBIAVAAIAACdg");
	this.shape_65.setTransform(262,321.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000099").s().p("AAfA5IAAgsIgLAAQgKAAgFACQgFADgJAOIgQAZIgZAAIAVgfQAJgOAKgCQgRgCgHgIQgJgKABgNQAAgOAKgKQALgJATAAIA0AAIAABxgAgRgjQgGAGAAAHQAAAKAIAFQAHAEASABIAVAAIAAgmIgbAAQgQAAgFAFg");
	this.shape_66.setTransform(331.8,288.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000099").s().p("AAbA5IAAhVIg0BVIgVAAIAAhxIATAAIAABWIA1hWIAVAAIAABxg");
	this.shape_67.setTransform(320.2,288.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000099").s().p("AAbA5IAAgyIg1AAIAAAyIgTAAIAAhxIATAAIAAAvIA1AAIAAgvIATAAIAABxg");
	this.shape_68.setTransform(308,288.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000099").s().p("AgqAzQgJgKgBgOQAAgIAFgIQADgGAHgFQAFgDAIgCIARgDQAXgCALgFIAAgEQAAgNgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQACgLAHgIQAFgIALgDQAMgEANAAQAPAAAJADQAJADAEAGQAFAFABAHIABASIAAAZQAAAbABAIQACAGAEAHIgUAAQgEgGgBgIQgLAJgJAEQgJADgLABQgUgBgKgIgAgDAHQgMACgFACQgFACgDAEQgDAEAAAFQAAAIAGAGQAGAEALAAQAKAAAJgEQAIgGAFgIQADgHAAgMIAAgHQgLAEgTADg");
	this.shape_69.setTransform(295.7,288.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000099").s().p("AApA5IAAhbIgiBbIgQAAIgfhfIAABfIgTAAIAAhxIAdAAIAeBaIAhhaIAbAAIAABxg");
	this.shape_70.setTransform(282.1,288.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000099").s().p("AgxBQIAAidIASAAIAAAPQAGgJAIgEQAIgEAKAAQAPAAALAIQALAHAGANQAFAOABARQAAARgHANQgGAOgMAHQgMAIgNAAQgJAAgHgEQgIgEgFgGIAAA3gAgWg0QgJALAAAWQAAAVAJAKQAJALAMAAQAMAAAKgLQAJgKAAgWQAAgXgJgKQgJgLgMAAQgMAAgKAMg");
	this.shape_71.setTransform(268.7,290.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000099").s().p("AglAsQgOgQAAgbQAAgcAOgQQAPgPAXAAQAXAAAOAPQAOAQAAAbIAAAFIhTAAQAAATAKAKQAJAKAOAAQALgBAHgFQAHgGAFgMIAUADQgFARgNAKQgMAKgUAAQgYAAgPgQgAgVgiQgJAJgBAPIA/AAQgBgPgGgGQgJgMgPAAQgMAAgKAJg");
	this.shape_72.setTransform(256.1,288.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000099").s().p("AgyBPIAAidIBlAAIAAATIhQAAIAACKg");
	this.shape_73.setTransform(244.9,286);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000099").s().p("AAfA5IAAgsIgLAAQgLAAgEACQgFADgJAOIgRAZIgYAAIAVgeQAKgPAJgBQgQgDgJgJQgIgJAAgNQAAgPALgJQAKgJAVAAIA0AAIAABxgAgSgiQgEAEgBAIQABAKAGAFQAIAFARgBIAWAAIAAglIgcAAQgQAAgFAGg");
	this.shape_74.setTransform(311,252.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_75.setTransform(299.5,252.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000099").s().p("AgwBQIAAicIARAAIAAAOQAGgIAIgFQAIgEAKAAQAPAAALAHQALAIAGAOQAFAOABAQQAAARgHANQgGAOgMAIQgMAHgNAAQgJAAgIgEQgHgEgFgHIAAA4gAgVg1QgKAMAAAWQAAAVAJALQAJAKAMAAQAMAAAKgKQAJgLAAgWQAAgXgJgKQgJgLgMAAQgMAAgJALg");
	this.shape_76.setTransform(287.5,254.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000099").s().p("AgpAyQgKgJAAgOQAAgJADgGQAEgIAGgDQAHgDAHgDIASgCQAWgEALgDIAAgGQAAgMgFgEQgIgGgOAAQgNgBgHAFQgGAFgEAMIgSgCQADgMAGgIQAFgHAMgFQALgDANgBQAPABAJADQAJADAFAFQADAGACAIIACASIAAAYQAAAbABAHQABAIADAGIgTAAQgDgGgBgIQgMAJgJAEQgJAEgLgBQgUABgJgKgAgDAHQgNACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgLAEgTADg");
	this.shape_77.setTransform(274.9,252.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000099").s().p("AAkBJIAAggIhXAAIAAhxIATAAIAABhIA0AAIAAhhIAUAAIAABhIAMAAIAAAwg");
	this.shape_78.setTransform(262.9,253.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000099").s().p("AAcBPIAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxgAgTg5QgJgHgBgOIANAAQACAIAEADQAEAEAHAAQAJAAAEgDQAEgEACgIIAOAAQgDAOgIAHQgHAHgPAAQgMAAgIgHg");
	this.shape_79.setTransform(250.1,249.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000099").s().p("AglAsQgPgQABgbQgBgcAPgQQAPgQAXAAQAXAAAOAQQAOAPAAAcIAAAFIhUAAQABATAKAJQAJAKAOAAQALABAHgGQAHgFAFgMIAUABQgEASgOAKQgMAJgUAAQgYAAgPgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgMAAgKAJg");
	this.shape_80.setTransform(237.7,252.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000099").s().p("AguA5IAAhxIAsAAQAQAAAIADQAIACAGAIQAGAHgBAKQAAAJgDAFQgDAHgHADQAIADAFAGQAGAIAAAKQgCAQgKAIQgKAIgVAAgAgaApIAZAAQAQAAAFgDQAGgFABgJQAAgGgEgEQgDgFgGgBIgRgBIgXAAgAgagIIAUAAQALAAAFgCQAEgBAFgDQADgEAAgGQAAgJgHgEQgGgDgPAAIgUAAg");
	this.shape_81.setTransform(226.1,252.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000099").s().p("AhTBPIAAidIAVAAIAACKIA1AAIAAiKIAUAAIAACKIA0AAIAAiKIAUAAIAACdg");
	this.shape_82.setTransform(209.9,249.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgLAAgEADQgFADgJAOIgRAZIgYAAIAVgeQAKgPAJgCQgQgCgJgIQgIgKAAgNQAAgOALgKQALgJAUAAIA0AAIAABxgAgRgiQgFAEgBAIQABAKAGAFQAIAFARAAIAWAAIAAgmIgcAAQgQAAgEAGg");
	this.shape_83.setTransform(269.1,216.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000099").s().p("AAcA5IAAhVIg1BVIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_84.setTransform(257.5,216.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000099").s().p("AAdA5IgXgkIgGgJIgdAtIgYAAIArg6Igng3IAYAAIARAbIAIAMIAIgMIATgbIAYAAIgoA2IAqA7g");
	this.shape_85.setTransform(245.9,216.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000099").s().p("AglAsQgPgPAAgcQAAgcAPgQQAPgQAXAAQAWAAAPAQQAOAQAAAbIAAAFIhTAAQABASAJALQAKAJANABQAKgBAIgFQAHgGAFgMIAUACQgEASgOAKQgMAKgUAAQgYgBgPgPgAgUgiQgKAJAAAPIA/AAQgCgOgGgIQgJgLgPAAQgNAAgIAJg");
	this.shape_86.setTransform(234.2,216.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000099").s().p("AAnBPIAAhAQgcALgUAAQgRAAgMgIQgMgIgFgKQgEgMAAgTIAAgvIAUAAIAAAtQABAZAJAIQAJAIAOAAQAUAAAZgJIAAhNIAVAAIAACdg");
	this.shape_87.setTransform(220.4,214.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000099").s().p("AAyBPIgSgwIhBAAIgRAwIgXAAIA9idIAVAAIBBCdgAgKgfIgRAtIA0AAIgQgrQgIgTgCgNQgDAPgGAPg");
	this.shape_88.setTransform(240.8,178);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000099").s().p("AhTBPIAAidIAVAAIAACKIA1AAIAAiKIAUAAIAACKIA0AAIAAiKIAUAAIAACdg");
	this.shape_89.setTransform(223.4,178);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000099").s().p("AgkBHQgQgKgIgUQgJgUABgVQgBgZAKgSQAJgSASgKQARgJAUAAQAYAAAPAMQARAMAGAVIgVAFQgFgRgKgIQgLgIgPAAQgSAAgMAJQgMAJgFAPQgFAOAAAQQAAATAGAPQAGAPAMAHQAMAIAOAAQARAAANgKQAMgLAEgTIAUAFQgGAZgRAOQgRANgYAAQgZAAgQgKg");
	this.shape_90.setTransform(205.5,178);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKABgFACQgFADgJAOIgRAZIgXAAIAUgeQAJgPAKgBQgRgDgIgIQgHgKAAgNQgBgPALgJQALgJATAAIA0AAIAABxgAgSgiQgEAEAAAIQgBAKAIAFQAHAFARgBIAWAAIAAglIgbAAQgQAAgGAGg");
	this.shape_91.setTransform(260.9,146.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000099").s().p("AAbA5IAAhWIg0BWIgVAAIAAhxIATAAIAABWIA1hWIAVAAIAABxg");
	this.shape_92.setTransform(249.4,146.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000099").s().p("AAtBJIAAggIhZAAIAAAgIgQAAIAAgwIAKAAQAVgbgBhGIBOAAIAABhIANAAIAAAwgAgfAZIA8AAIAAhRIgrAAQgCA3gPAag");
	this.shape_93.setTransform(236.4,148.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000099").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_94.setTransform(224.3,146.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKABgFACQgFADgJAOIgQAZIgZAAIAVgeQAKgPAJgBQgRgDgHgIQgJgKABgNQAAgPAKgJQAKgJAUAAIA0AAIAABxgAgRgiQgGAEAAAIQAAAKAIAFQAHAFASgBIAVAAIAAglIgcAAQgPAAgFAGg");
	this.shape_95.setTransform(211.7,146.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000099").s().p("Ag3A5IAAgQIAJAAQAGgBACgBQADgBABgDQABgDAAgPIAAhJIBZAAIAABxIgUAAIAAhhIgyAAIAAA4QAAATgBAHQgCAGgFAEQgGAFgLABIgQgBg");
	this.shape_96.setTransform(199.3,146.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000099").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_97.setTransform(187.4,146.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_98.setTransform(175.2,146.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000099").s().p("AgJBQIAAgVQgcgBgSgQQgTgQAAgaQAAgaATgPQASgQAcgBIAAgUIATAAIAAAUQAeABARARQASAQAAAYQAAAYgRAQQgRARgfACIAAAVgAAKApQAUAAAMgMQALgKAAgTQAAgRgLgLQgMgLgUgBgAgogdQgMALAAASQAAATAMAKQALAMAUAAIAAhRQgTABgMAKg");
	this.shape_99.setTransform(160.6,144.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000099").s().p("AAfA5IAAgtIgLAAQgKABgFACQgFADgJAOIgQAZIgZAAIAVgeQAJgPAKgCQgRgCgHgIQgJgKABgNQAAgOAKgKQALgJATAAIA0AAIAABxgAgRgiQgGAEAAAIQAAAKAIAFQAHAFASgBIAVAAIAAglIgbAAQgQAAgFAGg");
	this.shape_100.setTransform(213,109.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000099").s().p("AAbA5IAAhVIg0BVIgVAAIAAhxIATAAIAABWIA1hWIAVAAIAABxg");
	this.shape_101.setTransform(201.4,109.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000099").s().p("AAkBJIAAggIhXAAIAAhxIATAAIAABhIA0AAIAAhhIAUAAIAABhIAMAAIAAAwg");
	this.shape_102.setTransform(189.4,111.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000099").s().p("AgkAsQgPgQgBgbQABgcAPgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQACASAJALQAKAJANABQALAAAHgGQAHgGAFgMIAUACQgEASgNAKQgNAKgUgBQgYAAgOgPgAgUgiQgJAJgBAPIA/AAQgCgOgGgIQgJgLgPAAQgNAAgIAJg");
	this.shape_103.setTransform(176.5,109.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000099").s().p("AguA5IAAhxIAtAAQAPAAAIADQAIACAGAIQAFAHABAKQAAAJgEAFQgDAGgHAFQAIABAGAIQAFAHAAAKQgCAQgKAIQgLAIgTAAgAgbApIAaAAQAQAAAFgDQAHgEAAgKQAAgFgDgFQgEgEgGgCIgRgBIgYAAgAgbgIIAVAAQALAAAFgBQAEgCAEgEQAEgDAAgGQAAgJgGgDQgHgEgPAAIgVAAg");
	this.shape_104.setTransform(164.9,109.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000099").s().p("AhSBPIAAidIAUAAIAACKIA0AAIAAiKIAUAAIAACKIA0AAIAAiKIAVAAIAACdg");
	this.shape_105.setTransform(148.7,107.5);

	this.instance_3 = new lib.France();
	this.instance_3.parent = this;
	this.instance_3.setTransform(263,430);

	this.instance_4 = new lib.Latvia();
	this.instance_4.parent = this;
	this.instance_4.setTransform(243,396);

	this.instance_5 = new lib.Slovakia();
	this.instance_5.parent = this;
	this.instance_5.setTransform(223,362);

	this.instance_6 = new lib.Belarus();
	this.instance_6.parent = this;
	this.instance_6.setTransform(203,326);

	this.instance_7 = new lib.Norway();
	this.instance_7.parent = this;
	this.instance_7.setTransform(183,290);

	this.instance_8 = new lib.Germany();
	this.instance_8.parent = this;
	this.instance_8.setTransform(163,255);

	this.instance_9 = new lib.Switzerland();
	this.instance_9.parent = this;
	this.instance_9.setTransform(139,219);

	this.instance_10 = new lib.CzechRepublic();
	this.instance_10.parent = this;
	this.instance_10.setTransform(123,184);

	this.instance_11 = new lib.UnitedStates();
	this.instance_11.parent = this;
	this.instance_11.setTransform(103,149);

	this.instance_12 = new lib.Finland();
	this.instance_12.parent = this;
	this.instance_12.setTransform(83,114);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000099").s().p("AAfA5IAAgsIgLAAQgLgBgEADQgFADgJAOIgRAZIgYAAIAVgfQAKgOAJgBQgQgDgJgJQgHgJgBgNQAAgPALgJQAKgJAVAAIA0AAIAABxgAgSgjQgEAGgBAHQABAKAGAFQAIAEARABIAWAAIAAgmIgcAAQgQAAgFAFg");
	this.shape_106.setTransform(189.1,72.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000099").s().p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
	this.shape_107.setTransform(177.5,72.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000099").s().p("AgiAsQgPgPAAgdQAAgRAGgOQAHgOAMgGQANgIANABQATAAAMAJQAMAJADASIgTACQgDgLgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJAKQAJALANgBQALABAIgIQAIgGACgPIATACQgDAVgNALQgNALgTgBQgWAAgOgPg");
	this.shape_108.setTransform(166.2,72.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000099").s().p("AgiAsQgPgPAAgdQAAgRAGgOQAHgOAMgGQANgIANABQATAAAMAJQAMAJADASIgTACQgDgLgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJAKQAJALANgBQALABAIgIQAIgGACgPIATACQgDAVgNALQgNALgTgBQgWAAgOgPg");
	this.shape_109.setTransform(155.2,72.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000099").s().p("AgmAsQgOgPAAgdQAAgeARgQQAPgMAUAAQAYAAAPAPQAOAPAAAbQAAAWgGAMQgHAMgMAHQgNAIgPgBQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKAKANAAQAOABAKgMQAKgKAAgWQAAgVgKgKQgKgLgOAAQgNgBgKALg");
	this.shape_110.setTransform(143.2,72.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000099").s().p("Ag7BPIAAidIA7AAQAPAAAIACQAMACAIAFQAHAGAGAJQAEAKAAAMQAAAUgMANQgNAOgiAAIgnAAIAABAgAgmgDIAoAAQATAAAJgHQAJgIAAgOQgBgJgEgHQgGgHgHgDQgFgBgPAAIgnAAg");
	this.shape_111.setTransform(130.2,70.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000099").s().p("AgpAyQgLgJABgOQAAgIADgIQAEgHAGgDQAHgEAHgCIASgCQAWgDALgEIAAgGQAAgLgGgFQgHgGgOAAQgNAAgHAEQgGAFgEAMIgSgDQADgLAFgIQAGgHALgEQAMgFANAAQAPABAJADQAJADAEAFQAFAFACAJIABASIAAAYQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMgBQgSAAgKgJgAgEAHQgLACgGACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_112.setTransform(169.8,38);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000099").s().p("AAtBJIAAggIhZAAIAAAgIgQAAIAAgwIAKAAQAVgbgBhGIBOAAIAABhIANAAIAAAwgAgfAZIA8AAIAAhRIgrAAQgCA3gPAag");
	this.shape_113.setTransform(156.9,39.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000099").s().p("AgqAyQgKgJABgOQAAgIADgIQAEgHAGgDQAHgEAHgCIASgCQAWgDALgEIAAgGQAAgLgGgFQgHgGgOAAQgNAAgHAEQgGAFgEAMIgSgDQADgLAFgIQAGgHALgEQALgFAOAAQAPABAJADQAJADAEAFQAEAFADAJIABASIAAAYQAAAbAAAIQACAGAEAHIgVAAQgDgGAAgIQgLAJgKAEQgJAEgMgBQgSAAgLgJgAgEAHQgLACgGACQgFACgCAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgLAEgUADg");
	this.shape_114.setTransform(144.7,38);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000099").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAwIA1AAIAAgwIATAAIAABxg");
	this.shape_115.setTransform(132.5,38);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000099").s().p("AgpAyQgLgJABgOQAAgIADgIQAEgHAGgDQAHgEAHgCIASgCQAWgDALgEIAAgGQAAgLgFgFQgIgGgOAAQgNAAgHAEQgGAFgEAMIgSgDQADgLAFgIQAGgHAMgEQALgFANAAQAPABAJADQAJADAEAFQAFAFACAJIABASIAAAYQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMgBQgSAAgKgJgAgEAHQgLACgGACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_116.setTransform(120.3,38);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000099").s().p("AAdBPIgagrQgKgSgHgGQgIgHgMAAIAABKIgUAAIAAidIAUAAIAABFQAPAAAGgFQAGgGAHgVQAHgPAFgHQADgGAJgEQAHgFAKAAIAMAAIAAASIgEAAIgEAAQgKAAgFAFQgFAFgGAQQgIAUgFAFQgGAFgHADQAPADAPAYIAgA1g");
	this.shape_117.setTransform(108.7,35.8);

	this.instance_13 = new lib.Sweden();
	this.instance_13.parent = this;
	this.instance_13.setTransform(63,78);

	this.instance_14 = new lib.Russia();
	this.instance_14.parent = this;
	this.instance_14.setTransform(43,42);

	this.instance_15 = new lib.Canada();
	this.instance_15.parent = this;
	this.instance_15.setTransform(23,5);

	this.text_24 = new cjs.Text("Чемпионат мира по хоккею 2018", "30px 'Arial'", "#000066");
	this.text_24.textAlign = "center";
	this.text_24.lineHeight = 36;
	this.text_24.lineWidth = 543;
	this.text_24.parent = this;
	this.text_24.setTransform(540.6,26.2);
	this.text_24.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,6);

	this.bt_0_hist = new lib.bt_0_hist();
	this.bt_0_hist.parent = this;
	this.bt_0_hist.setTransform(502,203.7);
	new cjs.ButtonHelper(this.bt_0_hist, 0, 1, 1);

	this.bt_0_start = new lib.bt_Start();
	this.bt_0_start.parent = this;
	this.bt_0_start.setTransform(503,138);
	new cjs.ButtonHelper(this.bt_0_start, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt_0_start},{t:this.bt_0_hist},{t:this.text_24},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_2},{t:this.instance_1},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance}]}).to({state:[]},1).to({state:[]},2).wait(4));

	// фон
	this.instance_16 = new lib.Шайба("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(547.4,508.8,0.392,0.392,0,0,0,62.7,26.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#0066FF").ss(4,1,1).p("AzO/HMAmdA+P");
	this.shape_118.setTransform(359.7,295.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#CC0000").ss(4,1,1).p("AzO/HMAmdA+P");
	this.shape_119.setTransform(362.7,296.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(11.7,1,1).p("AzB+8MAmDA95");
	this.shape_120.setTransform(357.4,293.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#007BE2").ss(0.5,1,1).p("AlzhqQEgAdExgIQEygJgEAQQAmBagmA9QAAAUgUAAQmtAxoFgxQgUAAAAgUQhnizBkAbQjAg4EeAdg");
	this.shape_121.setTransform(527.4,498.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.rf(["#00176B","#2E79CD"],[0,1],-1.4,12.5,0,-1.4,12.5,91.8).s().p("Am6BdQgUAAAAgUQhnizBkAbQjAg4EeAdQEgAdExgIQEygJgEAQQAmBagmA9QAAAUgUAAQjWAYjtAAQjsAAkDgYg");
	this.shape_122.setTransform(527.4,498.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("ADlIrItrgCIAAj3INrACIFDABIBfAAIgIAMIgIAMIgIALIgEAMIgHAMIgIAMIgIALIgIAMIgIAMIgIAMIgHALIgEAMIgIAMIgBABIgHALIgIALIgIAMIgHAMIgIAMIgIALIgEAMIgEAIIgEAEIkJgBgADlB1ItrgCIAAj3INrADIFDAAIABAAIgBACIgHAKIgIAMIgIAMIgEALIgHAMIgIAMIgIAMIgIALIgIAMIgIAMIgHALIgEALIgIAMIgIAMIgIAMIgIALIgIAMIgHAMIgIAMIgEALIgEAIIgEAEIirAAgADlkyItrgCIAAj3INrACIDGAAIiFDXIgLAQQgIAIgIAEQgIAEgUAAg");
	this.shape_123.setTransform(64.7,509.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.instance_16}]}).to({state:[]},1).wait(6));

	// фото
	this.instance_17 = new lib.h3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(448,285,0.834,0.764);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400.1,246.5,825,736.8);
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 60,
	color: "#6699CC",
	opacity: 1.00,
	manifest: [
		{src:"images/Belarus.png?1521573878367", id:"Belarus"},
		{src:"images/Canada.png?1521573878367", id:"Canada"},
		{src:"images/country.png?1521573878367", id:"country"},
		{src:"images/CzechRepublic.png?1521573878367", id:"CzechRepublic"},
		{src:"images/Denmark.png?1521573878367", id:"Denmark"},
		{src:"images/Finland.png?1521573878367", id:"Finland"},
		{src:"images/France.png?1521573878367", id:"France"},
		{src:"images/Germany.png?1521573878367", id:"Germany"},
		{src:"images/h3.jpg?1521573878367", id:"h3"},
		{src:"images/history.jpg?1521573878367", id:"history"},
		{src:"images/Kazakhstan.png?1521573878367", id:"Kazakhstan"},
		{src:"images/Latvia.png?1521573878367", id:"Latvia"},
		{src:"images/Norway.png?1521573878367", id:"Norway"},
		{src:"images/Russia.png?1521573878367", id:"Russia"},
		{src:"images/Slovakia.png?1521573878367", id:"Slovakia"},
		{src:"images/Slovenia.png?1521573878367", id:"Slovenia"},
		{src:"images/Sweden.png?1521573878367", id:"Sweden"},
		{src:"images/Switzerland.png?1521573878367", id:"Switzerland"},
		{src:"images/UnitedStates.png?1521573878367", id:"UnitedStates"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;