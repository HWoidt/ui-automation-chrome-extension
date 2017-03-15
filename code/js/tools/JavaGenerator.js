var JavaGenerator = {

    fieldFromCSS: function (cssExpression, existingFieldsLength) {
        var onlyIdSelector = cssExpression.indexOf('#') === 0 && cssExpression.indexOf(' ') === -1;
        var stepId = existingFieldsLength + 1;
        var elementName = 'element' + stepId;

        if(onlyIdSelector) {
            var findElement = 'driver.findElement(By.id("' + cssExpression.substring(1) + '")';
        } else {
            var findElement = 'driver.findElement(By.cssSelector("' + cssExpression + '")';
        }

        var print = 'System.out.println("Step ' + stepId + ': click ' + cssExpression + '");';
        var field = 'WebElement ' + elementName + ' = ' + findElement + ';';

        var click = elementName + '.click();';
        var sleep = 'sleepStep(1);';

        var sep = '\n        ';
        return       field
             + sep + print
             + sep + click
             + sep + sleep
             ;
    }
};
