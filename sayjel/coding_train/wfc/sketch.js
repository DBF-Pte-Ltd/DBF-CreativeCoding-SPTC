const tiles = []
const grid = []
const DIM = 3
let LEFT, UP, DOWN, BLANK, RIGHT


let rules = {

  BLANK: [[BLANK, UP],[BLANK, UP],[BLANK, UP],[BLANK, UP]],  
  UP: [[RIGHT, LEFT, DOWN],[LEFT, UP, DOWN],[BLANK, DOWN],[RIGHT, UP, DOWN]],
  RIGHT: [[RIGHT, LEFT, DOWN],[LEFT, UP, DOWN],[RIGHT, LEFT, UP],[BLANK, LEFT]],
  DOWN: [[BLANK, UP],[LEFT, UP, DOWN],[RIGHT,LEFT,UP],[RIGHT,UP,DOWN]],
  LEFT:  [[RIGHT,LEFT,DOWN],[BLANK, RIGHT],[RIGHT,LEFT, UP],[UP,DOWN,RIGHT]],

}

function preload() {

    tiles[0] = 'blank'
    tiles[1] = 'up'
    tiles[2] = 'right'
    tiles[3] = 'down'
    tiles[4] = 'left'

}





function setup() {
    createCanvas(400, 400);
    background(255, 255, 0);

    for (let i = 0; i < DIM * DIM; i++) {

        grid[i] = {
            collapsed: false,
            options: [0, 1, 2, 3, 4]
        }
    }

    textAlign(CENTER)

}

function draw() {

    background(255, 255, 0);
    const w = width / DIM
    const h = width / DIM
    fill('white')

    // pick cell with least entropy 

    const gridCopy = grid.slice()
    gridCopy.sort((a,b)=>{
      return a.options.length - b.options.length 
    })


    console.log(grid)
    console.log(gridCopy)

    let len = gridCopy[0].options.length
    let stopIndex = 0 

    for (let i = 1; i <gridCopy.length; i++){
      if (gridCopy[i].options.length > len){
        stopIndex = i
        break 
      }
    }


    if (stopIndex > 0) ridCopy.splice(stopIndex)

    const cell = random(gridCopy)
    cell.collapsed = true 
    const pick = random(cell.options)
    cell.options = [pick]


    const nextTiles = []

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {

          let index = i + j * DIM
           
            if (tiles[index].collapsed) {
              nextTiles[index] = tiles[index]

            } else {

              // look up 
              let options = [BLANK, UP, RIGHT, DOWN, LEFT]

            if (j > 0){

              // look up 


              let up = tiles[i+(j-1)*DIM]

              for (let option of up.options){
                // 
              }

            }

              // look right 

              // look down 

              // look left


            }

              
         


            }


        }

    noLoop()

    }






function checkValid(){


  
}






function drawCells(){



    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            let cell = grid[i + j * DIM]
            if (cell.collapsed) {
                let index = cell.options[0]
                fill(0)
                text(tiles[index], i * w + w / 2, j * h + h / 2)

            } else {

                fill(0)
                stroke('red')
                rectMode(CORNER)
                rect(i * w, j * h, w, h)


            }


        }

    }

}