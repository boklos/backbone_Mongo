Congo.Database = Backbone.Model.extend({
	
});

Congo.Databases = Backbone.Collection.extend({
	model : Congo.Database,
	url: "/mongo-api/dbs"
})

Congo.DatabaseView = Backbone.View.extend({
	tagName : "tr",
	render : function(){
		var template = $("#database-list-template").html();
		var compiled = _.template(template, {name : "KOKO"});
		this.$el.html(compiled);
		return this;
		
	},
	events :{
			'click a' : 'sayHello',
			'click button' : 'sayHello'
		},
		sayHello : function(){
			alert ("clicked my list item");
		}
});

Congo.DatabaseListView = Backbone.View.extend({
	tagName : "table",
	className : "table table-striped",
	render : function(){
		for(var i = 1; i<= 5; i++){
			var itemView = new Congo.DatabaseView();
			var rendered = this.$el.append(itemView.render().el);
			
		}
		//var rendered = this.$el.html();
		$('#database-list').html(rendered);
		
		
	}
})
