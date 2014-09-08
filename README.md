

## windows.js 

### usage

```javascript

windows.subscribe('{channel}', function(value, storageEvent){
  console.log(value);
});

windows.unsubscribe('{channel}');

windows.publish('{channel}', data);

var channels = windows.subscriptions();

```
### run

```sh
$ cd html/
$ python -m SimpleHTTPServer 8080
```
