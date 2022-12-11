/*
 * Copyright (c) 2022.  BraveGrumpy.
 * Do not reproduce contents without express written permission from the author.
 * You can get permission by cloning the repository https://github.com/robin-zollner/bravegrumpy.website.git, and creating a new branch.
 * Otherwise, you can email seacrestskylar@gmail.com, or join the discord server, linked within each page.
 * The purpose of this website, is to practice responsive web design, and to publish creative writing.
 */

;(function () {
    //initializing config variables
    let canvas, ctx

    //creating a function to create Rectagles
    class Rectangle{
        //call this function to create rectangles
        //these are the arguments to pass in
        //x,y,width,height,fillColor, strokeColor, strokeWidth
        //default values are included to prevent errors.
        constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '#000000', strokeColor = '#000000', strokeWidth = 2){
            //ensure that arguemnts passed in are numbers
            this.x = Number(x)
            this.y = Number(y)
            this.width = Number(width)
            this.height = Number(height)
            this.fillColor = fillColor
            this.strokeColor = strokeColor
            this.strokeWidth = strokeWidth  
    }

    //get keyword causes this method to be called
    //when you use myRectangle.area
    get area() {
        return this.width * this.height
    }

    get left() {
        //origin is the top left
        return this.x
    }

    get right() {
        return this.x + this.width
    }

    get top() {
        return this.y
    }

    get bottom() {
        return this.y + this.height
    }
    

    draw() {
        //drawing rectangle to screen
        //destructuring
        const {x, y, width, height, fillColor, strokeColor, strokeWidth} = this

        //saves current styles made elsewhere
        ctx.save()

        //sets styles for this shape
        ctx.fillStyle = fillColor
        ctx.lineWidth = strokeWidth

        //creates the *path* of the rectangle
        ctx.beginPath()
        ctx.strokeStyle = strokeColor
        ctx.rect(x, y, width, height)

        //draw path to screen
        ctx.fill()
        ctx.stroke()

        //restores previous styles
        //prevents styles used here from affecting other shapes
        ctx.restore()
    }
}

   //setup config variables and start program
    function init() {
        canvas = document.getElementById('gameCanvas')
        ctx = canvas.getContext('2d')
    
        //insert drawings here

        //outlined rectangle
        ctx.beginPath()
        ctx.strokeRect(20, 20, 100, 100) //draw a rectangle

        //filled rectangle
        ctx.beginPath()
        ctx.fillRect(140, 20, 100, 100) //draw a filled rectangle

        //filled rectangle with outline
        ctx.beginPath()
        ctx.strokeStyle = 'red'
        ctx.fillStyle = 'blue'
        ctx.lineWidth = 5
        ctx.rect(260, 20, 100, 100) //draw a filled rectangle with an outline
        ctx.fill()
        ctx.stroke()

        //Create another rectangle, without changing settings
        ctx.beginPath()
        ctx.rect(380, 20, 100, 100) //draw a rectangle
        ctx.fill()
        ctx.stroke()

        //drawing rectangle from class
        const mySquare = new Rectangle(500, 20, 100, 100, 'pink', 'gold', 5)
        console.log(mySquare.area)
        mySquare.draw()
    }

    // wait for html to load before starting program
    document.addEventListener('DOMContentLoaded', init)

})()