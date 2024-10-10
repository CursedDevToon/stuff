input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 100)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 100)
})
