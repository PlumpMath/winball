
;;(function(scope, windows){

  var print = function(msg){
    var out = document.getElementById('out');
    if (msg) out.innerHTML += "<p>" + msg + "</p>";
  };

  var channel = document.getElementById('txtchannel');
  var data = document.getElementById('txtdata');
  var btnsubscribe = document.getElementById('btnsubscribe');
  var btnunsubscribe = document.getElementById('btnunsubscribe');
  var btnpublish = document.getElementById('btnpublish');
  var txtchannel = document.getElementById('chan');
  var btnsubscriptions = document.getElementById('btnsubscriptions');
  
  var click_handler = function(){
    windows.publish(channel.value, data.value)
  };

  var channel_changed = function(){
    txtchannel.innerHTML = channel.value;
  };

  btnsubscriptions.addEventListener('click', function(){
    print("subscriptions");
    windows.subscriptions().forEach(function(v){
      print("channel - " + v);
    });
  }, false);

  btnsubscribe.addEventListener('click', function(){
    var ch = channel.value.slice(0);
    windows.subscribe(ch, function(v, evt){ 
      print(ch + " :: " + v)
    });
  }, false);
  
  btnunsubscribe.addEventListener('click', function(){
    windows.unsubscribe(channel.value);
  }, false);

  btnpublish.addEventListener('click', click_handler, false);

  channel.addEventListener('keyup', channel_changed, false);

}(window, windows));
