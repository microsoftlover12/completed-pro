function Upload(){

    var imgcanvas=document.getElementById("can");
    var fileinput=document.getElementById("finput");
    
    var img = new SimpleImage(200, 200);
    for (var p of img.values()){
        x = p.getX();
        y = p.getY();
        w = img.getWidth()
        if (x > y){
            p.setRed(255);
        }
        if (x + y > w){ 
            p.setRed(255);
        }
        if (x > 20){
            p.setRed(255);
        }
    }
    print (img);
    
    var image=new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}