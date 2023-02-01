  var KeyValue = 1000;

  function test()
{
    console.log("printing value from test function in file2.js file");

}

 class LaptopBuying_Values
{
    constructor()
    {
        this.propertyValue = 23000;
        this.newModelCame = false;
        this.modelName = "New Model series";

    }

    ConcatenationFunction()
    {
        return "from ConcatenationFunction" + " " + this.modelName + " " + this.propertyValue + " " + this.newModelCame;
    }
}


console.log(KeyValue);
test();

var p = new LaptopBuying_Values();
console.log(p.ConcatenationFunction());




