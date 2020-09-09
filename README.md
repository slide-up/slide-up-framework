Easily create lenses programatically for Lens Studio

####Creating Images　

```javascript
var image=new suFramework.Image();
image.setFrame(0,0,200,200)
image.setTexture(script.texture)
image.setOnTap=function (){}
image.image.stretchMode = StretchMode.Stretch; 
```



####Creating Texts　

```javascript
var text=new suFramework.Text();
text.setFrame(0,0,200,200)    
text.text.text="Hello World"
text.text.size=200
text.text.backgroundSettings.enabled=true
text.text.backgroundSettings.fill.color=new vec4(0,0,0,255)    
text.text.horizontalAlignment=HorizontalAlignment.Left
text.text.verticalAlignment=VerticalAlignment.Center
text.text.verticalOverflow=VerticalOverflow.Shrink
text.text.horizontalOverflow=HorizontalOverflow.Shrink    
```
