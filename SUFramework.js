
SUFramework = {}
// @input Component.Camera orthoCam
// @input Asset.Material materialToCopy
// @input Asset.Texture defaultTexture
// @input Asset.Texture deviceTexture

SUFramework.init = function () {
    
  SUFramework.deviceWidth=script.deviceTexture.control.getWidth();
  SUFramework.deviceHeight=script.deviceTexture.control.getHeight();    
}
SUFramework.Image=function () {
  //this.name="aaa"

  this.sceneObj = global.scene.createSceneObject("Image Object");
  this.sceneObj.setParent(script.getSceneObject());
  this.sceneObj.layer = script.orthoCam.renderLayer;
    
  this.screenTransform = this.sceneObj.createComponent("Component.ScreenTransform");
    
  this.image = this.sceneObj.createComponent("Component.Image");
  this.image.addMaterial(script.materialToCopy.clone())
  this.image.mainMaterial.mainPass.baseTex = script.defaultTexture;
    
  this.image.stretchMode = StretchMode.Fit;    

  this.screenTransform.anchors.setSize(new vec2(2,2));
  this.screenTransform.anchors.setCenter(new vec2 (0,0));    
    
  this.touch = this.sceneObj.createComponent("Component.TouchComponent");
  this.touch.addMeshVisual(this.image)
    
  
}
SUFramework.Image.prototype.setFrame=function(x,y,w,h) {
  print("set frame ")
    
  var normalizedX=x/SUFramework.deviceWidth;
  normalizedX=normalizedX*2-1  
  var normalizedY=y/SUFramework.deviceHeight;
  normalizedY=-1*(normalizedY*2-1)
  var normalizedWidth=w/SUFramework.deviceWidth*2;
  var normalizedHeight=h/SUFramework.deviceHeight*2;

  print(normalizedWidth)
  print(normalizedHeight)
  this.screenTransform.anchors.setSize(new vec2(normalizedWidth,normalizedHeight));
  //-1 1
  this.screenTransform.anchors.setCenter(new vec2 (normalizedX+normalizedWidth/2,normalizedY-normalizedHeight/2));
    
}
SUFramework.Image.prototype.setTexture=function(texture) {
  print("set texture")
  this.image.mainMaterial.mainPass.baseTex = texture;
    
}
SUFramework.Image.prototype.setOnTap=function(callback) {   
}



SUFramework.Text=function () {
    
  this.sceneObj = global.scene.createSceneObject("Text Object");
  this.sceneObj.setParent(script.getSceneObject());
  this.sceneObj.layer = script.orthoCam.renderLayer;
    
  this.screenTransform = this.sceneObj.createComponent("Component.ScreenTransform");
    
  this.text = this.sceneObj.createComponent("Component.Text");
  this.text.text = "Test";    
  this.text.size=50
  //this.text.backgroundSettings.enabled=true
  //this.text.backgroundSettings.fill.color=new vec4(0,0,0,255)
  this.text.horizontalAlignment=HorizontalAlignment.Left
  this.text.verticalOverflow=VerticalOverflow.Shrink
  this.text.horizontalOverflow=HorizontalOverflow.Wrap
    
  this.screenTransform.anchors.setSize(new vec2(2,2));
  this.screenTransform.anchors.setCenter(new vec2 (0,0));      
}
SUFramework.Text.prototype.setFrame=function(x,y,w,h) {
  print("set frame 2")
    
  var normalizedX=x/SUFramework.deviceWidth;
  normalizedX=normalizedX*2-1  
  var normalizedY=y/SUFramework.deviceHeight;
  normalizedY=-1*(normalizedY*2-1)
  var normalizedWidth=w/SUFramework.deviceWidth*2;
  var normalizedHeight=h/SUFramework.deviceHeight*2;

  print(normalizedWidth)
  print(normalizedHeight)
  this.screenTransform.anchors.setSize(new vec2(normalizedWidth,normalizedHeight));
  //-1 1
  this.screenTransform.anchors.setCenter(new vec2 (normalizedX+normalizedWidth/2,normalizedY-normalizedHeight/2));
        
    
}
SUFramework.Text.prototype.setText=function(text) {
}

global.SUFramework=SUFramework