# post--handwriting
1. Clone or download this repository
2. In command prompt or terminal navigate to the repository (ie /../../post--handwriting)
3. Run to set up a local server
```
sudo apachectl start
```
or

```
python -m SimpleHTTPServer 8888
```
4. Enter URL http://localhost:8888/public/predict-canvas.html
or
http://localhost/public/predict-canvas.html if you didn't specify a port

The top box is where you can give your handwriting sample. Below that will be the generated samples based on the input.
