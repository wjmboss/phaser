/**
 * [description]
 *
 * @function Phaser.Math.Easing.Bounce.InOut
 * @since 3.0.0
 *
 * @param {number} v - [description]
 *
 * @return {number} [description]
 */
var InOut = function (v)
{
    var reverse = false;

    if (v < 0.5)
    {
        v = 1 - (v * 2);
        reverse = true;
    }
    else
    {
        v = (v * 2) - 1;
    }

    if (v < 1 / 2.75)
    {
        v = 7.5625 * v * v;
    }
    else if (v < 2 / 2.75)
    {
        v = 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
    }
    else if (v < 2.5 / 2.75)
    {
        v = 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
    }
    else
    {
        v = 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
    }

    if (reverse)
    {
        return (1 - v) * 0.5;
    }
    else
    {
        return v * 0.5 + 0.5;
    }
};

module.exports = InOut;
