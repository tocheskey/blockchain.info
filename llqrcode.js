// QRCODE reader Copyright 2011 Lazar Laszlo
// http://www.webqr.com
_x10 = {};
_x10._x11 = function (f, e) {
    var d = qrcode.width;
    var b = qrcode.height;
    var c = true;
    for (var g = 0; g < e.Length && c; g += 2) {
        var a = Math.floor(e[g]);
        var h = Math.floor(e[g + 1]);
        if (a < -1 || a > d || h < -1 || h > b) {
            throw "Error._x11 "
        }
        c = false;
        if (a == -1) {
            e[g] = 0;
            c = true
        } else {
            if (a == d) {
                e[g] = d - 1;
                c = true
            }
        }
        if (h == -1) {
            e[g + 1] = 0;
            c = true
        } else {
            if (h == b) {
                e[g + 1] = b - 1;
                c = true
            }
        }
    }
    c = true;
    for (var g = e.Length - 2; g >= 0 && c; g -= 2) {
        var a = Math.floor(e[g]);
        var h = Math.floor(e[g + 1]);
        if (a < -1 || a > d || h < -1 || h > b) {
            throw "Error._x11 "
        }
        c = false;
        if (a == -1) {
            e[g] = 0;
            c = true
        } else {
            if (a == d) {
                e[g] = d - 1;
                c = true
            }
        }
        if (h == -1) {
            e[g + 1] = 0;
            c = true
        } else {
            if (h == b) {
                e[g + 1] = b - 1;
                c = true
            }
        }
    }
};
_x10._x15 = function (b, d, a) {
    var l = new _x12(d);
    var k = new Array(d << 1);
    for (var g = 0; g < d; g++) {
        var h = k.length;
        var j = g + 0.5;
        for (var i = 0; i < h; i += 2) {
            k[i] = (i >> 1) + 0.5;
            k[i + 1] = j
        }
        a._x13(k);
        _x10._x11(b, k);
        try {
            for (var i = 0; i < h; i += 2) {
                var e = (Math.floor(k[i]) * 4) + (Math.floor(k[i + 1]) * qrcode.width * 4);
                var f = b[Math.floor(k[i]) + qrcode.width * Math.floor(k[i + 1])];
                qrcode.imagedata.data[e] = f ? 255 : 0;
                qrcode.imagedata.data[e + 1] = f ? 255 : 0;
                qrcode.imagedata.data[e + 2] = 0;
                qrcode.imagedata.data[e + 3] = 255;
                if (f) {
                    l._x6f(i >> 1, g)
                }
            }
        } catch (c) {
            throw "Error._x11"
        }
    }
    return l
};
_x10._x17 = function (h, o, l, k, r, q, b, a, f, e, n, m, t, s, d, c, j, i) {
    var g = _x14._x16(l, k, r, q, b, a, f, e, n, m, t, s, d, c, j, i);
    return _x10._x15(h, o, g)
};

function _x20(b, a) {
    this.count = b;
    this._x91 = a;
    this.__defineGetter__("Count", function () {
        return this.count
    });
    this.__defineGetter__("_x69", function () {
        return this._x91
    })
}
function _x21(a, c, b) {
    this._x39 = a;
    if (b) {
        this._x6b = new Array(c, b)
    } else {
        this._x6b = new Array(c)
    }
    this.__defineGetter__("_x3b", function () {
        return this._x39
    });
    this.__defineGetter__("_x6a", function () {
        return this._x39 * this._x9d
    });
    this.__defineGetter__("_x9d", function () {
        var e = 0;
        for (var d = 0; d < this._x6b.length; d++) {
            e += this._x6b[d].length
        }
        return e
    });
    this._x90 = function () {
        return this._x6b
    }
}
function _x22(k, l, h, g, f, e) {
    this._x3e = k;
    this._x23 = l;
    this._x6b = new Array(h, g, f, e);
    var j = 0;
    var b = h._x3b;
    var a = h._x90();
    for (var d = 0; d < a.length; d++) {
        var c = a[d];
        j += c.Count * (c._x69 + b)
    }
    this._x3d = j;
    this.__defineGetter__("_x92", function () {
        return this._x3e
    });
    this.__defineGetter__("_x24", function () {
        return this._x23
    });
    this.__defineGetter__("_x6c", function () {
        return this._x3d
    });
    this.__defineGetter__("_x57", function () {
        return 17 + 4 * this._x3e
    });
    this._x25 = function () {
        var r = this._x57;
        var o = new _x12(r);
        o._x3f(0, 0, 9, 9);
        o._x3f(r - 8, 0, 8, 9);
        o._x3f(0, r - 8, 9, 8);
        var n = this._x23.length;
        for (var m = 0; m < n; m++) {
            var q = this._x23[m] - 2;
            for (var s = 0; s < n; s++) {
                if ((m == 0 && (s == 0 || s == n - 1)) || (m == n - 1 && s == 0)) {
                    continue
                }
                o._x3f(this._x23[s] - 2, q, 5, 5)
            }
        }
        o._x3f(6, 9, 1, r - 17);
        o._x3f(9, 6, r - 17, 1);
        if (this._x3e > 6) {
            o._x3f(r - 11, 0, 3, 6);
            o._x3f(0, r - 11, 6, 3)
        }
        return o
    };
    this._x40 = function (i) {
        return this._x6b[i.ordinal()]
    }
}
_x22._x41 = new Array(31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017);
_x22.VERSIONS = _x2b();
_x22._x27 = function (a) {
    if (a < 1 || a > 40) {
        throw "_xbc"
    }
    return _x22.VERSIONS[a - 1]
};
_x22._x28 = function (b) {
    if (b % 4 != 1) {
        throw "Error _x28"
    }
    try {
        return _x22._x27((b - 17) >> 2)
    } catch (a) {
        throw "Error _x27"
    }
};
_x22._x29 = function (d) {
    var b = 4294967295;
    var f = 0;
    for (var c = 0; c < _x22._x41.length; c++) {
        var a = _x22._x41[c];
        if (a == d) {
            return this._x27(c + 7)
        }
        var e = _x2a._xb0(d, a);
        if (e < b) {
            f = c + 7;
            b = e
        }
    }
    if (b <= 3) {
        return this._x27(f)
    }
    return null
};

function _x2b() {
    return new Array(new _x22(1, new Array(), new _x21(7, new _x20(1, 19)), new _x21(10, new _x20(1, 16)), new _x21(13, new _x20(1, 13)), new _x21(17, new _x20(1, 9))), new _x22(2, new Array(6, 18), new _x21(10, new _x20(1, 34)), new _x21(16, new _x20(1, 28)), new _x21(22, new _x20(1, 22)), new _x21(28, new _x20(1, 16))), new _x22(3, new Array(6, 22), new _x21(15, new _x20(1, 55)), new _x21(26, new _x20(1, 44)), new _x21(18, new _x20(2, 17)), new _x21(22, new _x20(2, 13))), new _x22(4, new Array(6, 26), new _x21(20, new _x20(1, 80)), new _x21(18, new _x20(2, 32)), new _x21(26, new _x20(2, 24)), new _x21(16, new _x20(4, 9))), new _x22(5, new Array(6, 30), new _x21(26, new _x20(1, 108)), new _x21(24, new _x20(2, 43)), new _x21(18, new _x20(2, 15), new _x20(2, 16)), new _x21(22, new _x20(2, 11), new _x20(2, 12))), new _x22(6, new Array(6, 34), new _x21(18, new _x20(2, 68)), new _x21(16, new _x20(4, 27)), new _x21(24, new _x20(4, 19)), new _x21(28, new _x20(4, 15))), new _x22(7, new Array(6, 22, 38), new _x21(20, new _x20(2, 78)), new _x21(18, new _x20(4, 31)), new _x21(18, new _x20(2, 14), new _x20(4, 15)), new _x21(26, new _x20(4, 13), new _x20(1, 14))), new _x22(8, new Array(6, 24, 42), new _x21(24, new _x20(2, 97)), new _x21(22, new _x20(2, 38), new _x20(2, 39)), new _x21(22, new _x20(4, 18), new _x20(2, 19)), new _x21(26, new _x20(4, 14), new _x20(2, 15))), new _x22(9, new Array(6, 26, 46), new _x21(30, new _x20(2, 116)), new _x21(22, new _x20(3, 36), new _x20(2, 37)), new _x21(20, new _x20(4, 16), new _x20(4, 17)), new _x21(24, new _x20(4, 12), new _x20(4, 13))), new _x22(10, new Array(6, 28, 50), new _x21(18, new _x20(2, 68), new _x20(2, 69)), new _x21(26, new _x20(4, 43), new _x20(1, 44)), new _x21(24, new _x20(6, 19), new _x20(2, 20)), new _x21(28, new _x20(6, 15), new _x20(2, 16))), new _x22(11, new Array(6, 30, 54), new _x21(20, new _x20(4, 81)), new _x21(30, new _x20(1, 50), new _x20(4, 51)), new _x21(28, new _x20(4, 22), new _x20(4, 23)), new _x21(24, new _x20(3, 12), new _x20(8, 13))), new _x22(12, new Array(6, 32, 58), new _x21(24, new _x20(2, 92), new _x20(2, 93)), new _x21(22, new _x20(6, 36), new _x20(2, 37)), new _x21(26, new _x20(4, 20), new _x20(6, 21)), new _x21(28, new _x20(7, 14), new _x20(4, 15))), new _x22(13, new Array(6, 34, 62), new _x21(26, new _x20(4, 107)), new _x21(22, new _x20(8, 37), new _x20(1, 38)), new _x21(24, new _x20(8, 20), new _x20(4, 21)), new _x21(22, new _x20(12, 11), new _x20(4, 12))), new _x22(14, new Array(6, 26, 46, 66), new _x21(30, new _x20(3, 115), new _x20(1, 116)), new _x21(24, new _x20(4, 40), new _x20(5, 41)), new _x21(20, new _x20(11, 16), new _x20(5, 17)), new _x21(24, new _x20(11, 12), new _x20(5, 13))), new _x22(15, new Array(6, 26, 48, 70), new _x21(22, new _x20(5, 87), new _x20(1, 88)), new _x21(24, new _x20(5, 41), new _x20(5, 42)), new _x21(30, new _x20(5, 24), new _x20(7, 25)), new _x21(24, new _x20(11, 12), new _x20(7, 13))), new _x22(16, new Array(6, 26, 50, 74), new _x21(24, new _x20(5, 98), new _x20(1, 99)), new _x21(28, new _x20(7, 45), new _x20(3, 46)), new _x21(24, new _x20(15, 19), new _x20(2, 20)), new _x21(30, new _x20(3, 15), new _x20(13, 16))), new _x22(17, new Array(6, 30, 54, 78), new _x21(28, new _x20(1, 107), new _x20(5, 108)), new _x21(28, new _x20(10, 46), new _x20(1, 47)), new _x21(28, new _x20(1, 22), new _x20(15, 23)), new _x21(28, new _x20(2, 14), new _x20(17, 15))), new _x22(18, new Array(6, 30, 56, 82), new _x21(30, new _x20(5, 120), new _x20(1, 121)), new _x21(26, new _x20(9, 43), new _x20(4, 44)), new _x21(28, new _x20(17, 22), new _x20(1, 23)), new _x21(28, new _x20(2, 14), new _x20(19, 15))), new _x22(19, new Array(6, 30, 58, 86), new _x21(28, new _x20(3, 113), new _x20(4, 114)), new _x21(26, new _x20(3, 44), new _x20(11, 45)), new _x21(26, new _x20(17, 21), new _x20(4, 22)), new _x21(26, new _x20(9, 13), new _x20(16, 14))), new _x22(20, new Array(6, 34, 62, 90), new _x21(28, new _x20(3, 107), new _x20(5, 108)), new _x21(26, new _x20(3, 41), new _x20(13, 42)), new _x21(30, new _x20(15, 24), new _x20(5, 25)), new _x21(28, new _x20(15, 15), new _x20(10, 16))), new _x22(21, new Array(6, 28, 50, 72, 94), new _x21(28, new _x20(4, 116), new _x20(4, 117)), new _x21(26, new _x20(17, 42)), new _x21(28, new _x20(17, 22), new _x20(6, 23)), new _x21(30, new _x20(19, 16), new _x20(6, 17))), new _x22(22, new Array(6, 26, 50, 74, 98), new _x21(28, new _x20(2, 111), new _x20(7, 112)), new _x21(28, new _x20(17, 46)), new _x21(30, new _x20(7, 24), new _x20(16, 25)), new _x21(24, new _x20(34, 13))), new _x22(23, new Array(6, 30, 54, 74, 102), new _x21(30, new _x20(4, 121), new _x20(5, 122)), new _x21(28, new _x20(4, 47), new _x20(14, 48)), new _x21(30, new _x20(11, 24), new _x20(14, 25)), new _x21(30, new _x20(16, 15), new _x20(14, 16))), new _x22(24, new Array(6, 28, 54, 80, 106), new _x21(30, new _x20(6, 117), new _x20(4, 118)), new _x21(28, new _x20(6, 45), new _x20(14, 46)), new _x21(30, new _x20(11, 24), new _x20(16, 25)), new _x21(30, new _x20(30, 16), new _x20(2, 17))), new _x22(25, new Array(6, 32, 58, 84, 110), new _x21(26, new _x20(8, 106), new _x20(4, 107)), new _x21(28, new _x20(8, 47), new _x20(13, 48)), new _x21(30, new _x20(7, 24), new _x20(22, 25)), new _x21(30, new _x20(22, 15), new _x20(13, 16))), new _x22(26, new Array(6, 30, 58, 86, 114), new _x21(28, new _x20(10, 114), new _x20(2, 115)), new _x21(28, new _x20(19, 46), new _x20(4, 47)), new _x21(28, new _x20(28, 22), new _x20(6, 23)), new _x21(30, new _x20(33, 16), new _x20(4, 17))), new _x22(27, new Array(6, 34, 62, 90, 118), new _x21(30, new _x20(8, 122), new _x20(4, 123)), new _x21(28, new _x20(22, 45), new _x20(3, 46)), new _x21(30, new _x20(8, 23), new _x20(26, 24)), new _x21(30, new _x20(12, 15), new _x20(28, 16))), new _x22(28, new Array(6, 26, 50, 74, 98, 122), new _x21(30, new _x20(3, 117), new _x20(10, 118)), new _x21(28, new _x20(3, 45), new _x20(23, 46)), new _x21(30, new _x20(4, 24), new _x20(31, 25)), new _x21(30, new _x20(11, 15), new _x20(31, 16))), new _x22(29, new Array(6, 30, 54, 78, 102, 126), new _x21(30, new _x20(7, 116), new _x20(7, 117)), new _x21(28, new _x20(21, 45), new _x20(7, 46)), new _x21(30, new _x20(1, 23), new _x20(37, 24)), new _x21(30, new _x20(19, 15), new _x20(26, 16))), new _x22(30, new Array(6, 26, 52, 78, 104, 130), new _x21(30, new _x20(5, 115), new _x20(10, 116)), new _x21(28, new _x20(19, 47), new _x20(10, 48)), new _x21(30, new _x20(15, 24), new _x20(25, 25)), new _x21(30, new _x20(23, 15), new _x20(25, 16))), new _x22(31, new Array(6, 30, 56, 82, 108, 134), new _x21(30, new _x20(13, 115), new _x20(3, 116)), new _x21(28, new _x20(2, 46), new _x20(29, 47)), new _x21(30, new _x20(42, 24), new _x20(1, 25)), new _x21(30, new _x20(23, 15), new _x20(28, 16))), new _x22(32, new Array(6, 34, 60, 86, 112, 138), new _x21(30, new _x20(17, 115)), new _x21(28, new _x20(10, 46), new _x20(23, 47)), new _x21(30, new _x20(10, 24), new _x20(35, 25)), new _x21(30, new _x20(19, 15), new _x20(35, 16))), new _x22(33, new Array(6, 30, 58, 86, 114, 142), new _x21(30, new _x20(17, 115), new _x20(1, 116)), new _x21(28, new _x20(14, 46), new _x20(21, 47)), new _x21(30, new _x20(29, 24), new _x20(19, 25)), new _x21(30, new _x20(11, 15), new _x20(46, 16))), new _x22(34, new Array(6, 34, 62, 90, 118, 146), new _x21(30, new _x20(13, 115), new _x20(6, 116)), new _x21(28, new _x20(14, 46), new _x20(23, 47)), new _x21(30, new _x20(44, 24), new _x20(7, 25)), new _x21(30, new _x20(59, 16), new _x20(1, 17))), new _x22(35, new Array(6, 30, 54, 78, 102, 126, 150), new _x21(30, new _x20(12, 121), new _x20(7, 122)), new _x21(28, new _x20(12, 47), new _x20(26, 48)), new _x21(30, new _x20(39, 24), new _x20(14, 25)), new _x21(30, new _x20(22, 15), new _x20(41, 16))), new _x22(36, new Array(6, 24, 50, 76, 102, 128, 154), new _x21(30, new _x20(6, 121), new _x20(14, 122)), new _x21(28, new _x20(6, 47), new _x20(34, 48)), new _x21(30, new _x20(46, 24), new _x20(10, 25)), new _x21(30, new _x20(2, 15), new _x20(64, 16))), new _x22(37, new Array(6, 28, 54, 80, 106, 132, 158), new _x21(30, new _x20(17, 122), new _x20(4, 123)), new _x21(28, new _x20(29, 46), new _x20(14, 47)), new _x21(30, new _x20(49, 24), new _x20(10, 25)), new _x21(30, new _x20(24, 15), new _x20(46, 16))), new _x22(38, new Array(6, 32, 58, 84, 110, 136, 162), new _x21(30, new _x20(4, 122), new _x20(18, 123)), new _x21(28, new _x20(13, 46), new _x20(32, 47)), new _x21(30, new _x20(48, 24), new _x20(14, 25)), new _x21(30, new _x20(42, 15), new _x20(32, 16))), new _x22(39, new Array(6, 26, 54, 82, 110, 138, 166), new _x21(30, new _x20(20, 117), new _x20(4, 118)), new _x21(28, new _x20(40, 47), new _x20(7, 48)), new _x21(30, new _x20(43, 24), new _x20(22, 25)), new _x21(30, new _x20(10, 15), new _x20(67, 16))), new _x22(40, new Array(6, 30, 58, 86, 114, 142, 170), new _x21(30, new _x20(19, 118), new _x20(6, 119)), new _x21(28, new _x20(18, 47), new _x20(31, 48)), new _x21(30, new _x20(34, 24), new _x20(34, 25)), new _x21(30, new _x20(20, 15), new _x20(61, 16))))
}
function _x14(i, f, c, h, e, b, g, d, a) {
    this.a11 = i;
    this.a12 = h;
    this.a13 = g;
    this.a21 = f;
    this.a22 = e;
    this.a23 = d;
    this.a31 = c;
    this.a32 = b;
    this.a33 = a;
    this._x13 = function (w) {
        var t = w.length;
        var A = this.a11;
        var z = this.a12;
        var v = this.a13;
        var r = this.a21;
        var q = this.a22;
        var o = this.a23;
        var m = this.a31;
        var k = this.a32;
        var j = this.a33;
        for (var n = 0; n < t; n += 2) {
            var u = w[n];
            var s = w[n + 1];
            var l = v * u + o * s + j;
            w[n] = (A * u + r * s + m) / l;
            w[n + 1] = (z * u + q * s + k) / l
        }
    };
    this._x9e = function (m, k) {
        var r = m.length;
        for (var l = 0; l < r; l++) {
            var j = m[l];
            var q = k[l];
            var o = this.a13 * j + this.a23 * q + this.a33;
            m[l] = (this.a11 * j + this.a21 * q + this.a31) / o;
            k[l] = (this.a12 * j + this.a22 * q + this.a32) / o
        }
    };
    this._x9f = function () {
        return new _x14(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
    };
    this.times = function (j) {
        return new _x14(this.a11 * j.a11 + this.a21 * j.a12 + this.a31 * j.a13, this.a11 * j.a21 + this.a21 * j.a22 + this.a31 * j.a23, this.a11 * j.a31 + this.a21 * j.a32 + this.a31 * j.a33, this.a12 * j.a11 + this.a22 * j.a12 + this.a32 * j.a13, this.a12 * j.a21 + this.a22 * j.a22 + this.a32 * j.a23, this.a12 * j.a31 + this.a22 * j.a32 + this.a32 * j.a33, this.a13 * j.a11 + this.a23 * j.a12 + this.a33 * j.a13, this.a13 * j.a21 + this.a23 * j.a22 + this.a33 * j.a23, this.a13 * j.a31 + this.a23 * j.a32 + this.a33 * j.a33)
    }
}
_x14._x16 = function (q, e, o, d, n, c, m, b, h, r, l, f, a, j, i, s) {
    var g = this._x31(q, e, o, d, n, c, m, b);
    var k = this._x32(h, r, l, f, a, j, i, s);
    return k.times(g)
};
_x14._x32 = function (f, h, d, g, b, e, a, c) {
    dy2 = c - e;
    dy3 = h - g + e - c;
    if (dy2 == 0 && dy3 == 0) {
        return new _x14(d - f, b - d, f, g - h, e - g, h, 0, 0, 1)
    } else {
        dx1 = d - b;
        dx2 = a - b;
        dx3 = f - d + b - a;
        dy1 = g - e;
        _x6d = dx1 * dy2 - dx2 * dy1;
        a13 = (dx3 * dy2 - dx2 * dy3) / _x6d;
        a23 = (dx1 * dy3 - dx3 * dy1) / _x6d;
        return new _x14(d - f + a13 * d, a - f + a23 * a, f, g - h + a13 * g, c - h + a23 * c, h, a13, a23, 1)
    }
};
_x14._x31 = function (f, h, d, g, b, e, a, c) {
    return this._x32(f, h, d, g, b, e, a, c)._x9f()
};

function _x33(b, a) {
    this.bits = b;
    this.points = a
}
function Detector(a) {
    this.image = a;
    this._x1c = null;
    this._x35 = function (m, l, c, b) {
        var d = Math.abs(b - l) > Math.abs(c - m);
        if (d) {
            var s = m;
            m = l;
            l = s;
            s = c;
            c = b;
            b = s
        }
        var j = Math.abs(c - m);
        var i = Math.abs(b - l);
        var q = -j >> 1;
        var v = l < b ? 1 : -1;
        var f = m < c ? 1 : -1;
        var e = 0;
        for (var h = m, g = l; h != c; h += f) {
            var u = d ? g : h;
            var t = d ? h : g;
            if (e == 1) {
                if (this.image[u + t * qrcode.width]) {
                    e++
                }
            } else {
                if (!this.image[u + t * qrcode.width]) {
                    e++
                }
            }
            if (e == 3) {
                var o = h - m;
                var n = g - l;
                return Math.sqrt((o * o + n * n))
            }
            q += i;
            if (q > 0) {
                if (g == b) {
                    break
                }
                g += v;
                q -= j
            }
        }
        var k = c - m;
        var r = b - l;
        return Math.sqrt((k * k + r * r))
    };
    this._x34 = function (i, g, h, f) {
        var b = this._x35(i, g, h, f);
        var e = 1;
        var d = i - (h - i);
        if (d < 0) {
            e = i / (i - d);
            d = 0
        } else {
            if (d >= qrcode.width) {
                e = (qrcode.width - 1 - i) / (d - i);
                d = qrcode.width - 1
            }
        }
        var c = Math.floor(g - (f - g) * e);
        e = 1;
        if (c < 0) {
            e = g / (g - c);
            c = 0
        } else {
            if (c >= qrcode.height) {
                e = (qrcode.height - 1 - g) / (c - g);
                c = qrcode.height - 1
            }
        }
        d = Math.floor(i + (d - i) * e);
        b += this._x35(i, g, d, c);
        return b - 1
    };
    this._x36 = function (c, d) {
        var b = this._x34(Math.floor(c.X), Math.floor(c.Y), Math.floor(d.X), Math.floor(d.Y));
        var e = this._x34(Math.floor(d.X), Math.floor(d.Y), Math.floor(c.X), Math.floor(c.Y));
        if (isNaN(b)) {
            return e / 7
        }
        if (isNaN(e)) {
            return b / 7
        }
        return (b + e) / 14
    };
    this._x37 = function (d, c, b) {
        return (this._x36(d, c) + this._x36(d, b)) / 2
    };
    this.distance = function (c, b) {
        xDiff = c.X - b.X;
        yDiff = c.Y - b.Y;
        return Math.sqrt((xDiff * xDiff + yDiff * yDiff))
    };
    this._x43 = function (g, f, d, e) {
        var b = Math.round(this.distance(g, f) / e);
        var c = Math.round(this.distance(g, d) / e);
        var h = ((b + c) >> 1) + 7;
        switch (h & 3) {
        case 0:
            h++;
            break;
        case 2:
            h--;
            break;
        case 3:
            throw "Error"
        }
        return h
    };
    this._x38 = function (g, f, d, j) {
        var k = Math.floor(j * g);
        var h = Math.max(0, f - k);
        var i = Math.min(qrcode.width - 1, f + k);
        if (i - h < g * 3) {
            throw "Error"
        }
        var b = Math.max(0, d - k);
        var c = Math.min(qrcode.height - 1, d + k);
        var e = new _x1a(this.image, h, b, i - h, c - b, g, this._x1c);
        return e.find()
    };
    this._xc5 = function (l, h, k, b, g) {
        var j = g - 3.5;
        var i;
        var f;
        var e;
        var c;
        if (b != null) {
            i = b.X;
            f = b.Y;
            e = c = j - 3
        } else {
            i = (h.X - l.X) + k.X;
            f = (h.Y - l.Y) + k.Y;
            e = c = j
        }
        var d = _x14._x16(3.5, 3.5, j, 3.5, e, c, 3.5, j, l.X, l.Y, h.X, h.Y, i, f, k.X, k.Y);
        return d
    };
    this._x45 = function (e, b, d) {
        var c = _x10;
        return c._x15(e, d, b)
    };
    this._x49 = function (r) {
        var j = r._xb9;
        var h = r._xb8;
        var n = r._xb6;
        var d = this._x37(j, h, n);
        if (d < 1) {
            throw "Error"
        }
        var s = this._x43(j, h, n, d);
        var b = _x22._x28(s);
        var k = b._x57 - 7;
        var l = null;
        if (b._x24.length > 0) {
            var f = h.X - j.X + n.X;
            var e = h.Y - j.Y + n.Y;
            var c = 1 - 3 / k;
            var u = Math.floor(j.X + c * (f - j.X));
            var t = Math.floor(j.Y + c * (e - j.Y));
            for (var q = 4; q <= 16; q <<= 1) {
                l = this._x38(d, u, t, q);
                break
            }
        }
        var g = this._xc5(j, h, n, l, s);
        var m = this._x45(this.image, g, s);
        var o;
        if (l == null) {
            o = new Array(n, j, h)
        } else {
            o = new Array(n, j, h, l)
        }
        return new _x33(m, o)
    };
    this.detect = function () {
        var b = new _x48()._x4a(this.image);
        return this._x49(b)
    }
}
var _x46 = 21522;
var _x47 = new Array(new Array(21522, 0), new Array(20773, 1), new Array(24188, 2), new Array(23371, 3), new Array(17913, 4), new Array(16590, 5), new Array(20375, 6), new Array(19104, 7), new Array(30660, 8), new Array(29427, 9), new Array(32170, 10), new Array(30877, 11), new Array(26159, 12), new Array(25368, 13), new Array(27713, 14), new Array(26998, 15), new Array(5769, 16), new Array(5054, 17), new Array(7399, 18), new Array(6608, 19), new Array(1890, 20), new Array(597, 21), new Array(3340, 22), new Array(2107, 23), new Array(13663, 24), new Array(12392, 25), new Array(16177, 26), new Array(14854, 27), new Array(9396, 28), new Array(8579, 29), new Array(11994, 30), new Array(11245, 31));
var _x4d = new Array(0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4);

function _x2a(a) {
    this._x4b = _x4c.forBits((a >> 3) & 3);
    this._x93 = (a & 7);
    this.__defineGetter__("_x4c", function () {
        return this._x4b
    });
    this.__defineGetter__("_x73", function () {
        return this._x93
    });
    this._xc6 = function () {
        return (this._x4b.ordinal() << 3) | _x93
    };
    this.Equals = function (c) {
        var b = c;
        return this._x4b == b._x4b && this._x93 == b._x93
    }
}
_x2a._xb0 = function (d, c) {
    d ^= c;
    return _x4d[d & 15] + _x4d[(_x8b(d, 4) & 15)] + _x4d[(_x8b(d, 8) & 15)] + _x4d[(_x8b(d, 12) & 15)] + _x4d[(_x8b(d, 16) & 15)] + _x4d[(_x8b(d, 20) & 15)] + _x4d[(_x8b(d, 24) & 15)] + _x4d[(_x8b(d, 28) & 15)]
};
_x2a._x4e = function (a) {
    var b = _x2a._x4f(a);
    if (b != null) {
        return b
    }
    return _x2a._x4f(a ^ _x46)
};
_x2a._x4f = function (d) {
    var b = 4294967295;
    var a = 0;
    for (var c = 0; c < _x47.length; c++) {
        var g = _x47[c];
        var f = g[0];
        if (f == d) {
            return new _x2a(g[1])
        }
        var e = this._xb0(d, f);
        if (e < b) {
            a = g[1];
            b = e
        }
    }
    if (b <= 3) {
        return new _x2a(a)
    }
    return null
};

function _x4c(a, c, b) {
    this._x94 = a;
    this.bits = c;
    this.name = b;
    this.__defineGetter__("Bits", function () {
        return this.bits
    });
    this.__defineGetter__("Name", function () {
        return this.name
    });
    this.ordinal = function () {
        return this._x94
    }
}
_x4c.forBits = function (a) {
    if (a < 0 || a >= FOR_BITS.Length) {
        throw "_xbc"
    }
    return FOR_BITS[a]
};
var L = new _x4c(0, 1, "L");
var M = new _x4c(1, 0, "M");
var Q = new _x4c(2, 3, "Q");
var H = new _x4c(3, 2, "H");
var FOR_BITS = new Array(M, L, H, Q);

function _x12(d, a) {
    if (!a) {
        a = d
    }
    if (d < 1 || a < 1) {
        throw "Both dimensions must be greater than 0"
    }
    this.width = d;
    this.height = a;
    var c = d >> 5;
    if ((d & 31) != 0) {
        c++
    }
    this.rowSize = c;
    this.bits = new Array(c * a);
    for (var b = 0; b < this.bits.length; b++) {
        this.bits[b] = 0
    }
    this.__defineGetter__("Width", function () {
        return this.width
    });
    this.__defineGetter__("Height", function () {
        return this.height
    });
    this.__defineGetter__("Dimension", function () {
        if (this.width != this.height) {
            throw "Can't call getDimension() on a non-square matrix"
        }
        return this.width
    });
    this._x6e = function (e, g) {
        var f = g * this.rowSize + (e >> 5);
        return ((_x8b(this.bits[f], (e & 31))) & 1) != 0
    };
    this._x6f = function (e, g) {
        var f = g * this.rowSize + (e >> 5);
        this.bits[f] |= 1 << (e & 31)
    };
    this.flip = function (e, g) {
        var f = g * this.rowSize + (e >> 5);
        this.bits[f] ^= 1 << (e & 31)
    };
    this.clear = function () {
        var e = this.bits.length;
        for (var f = 0; f < e; f++) {
            this.bits[f] = 0
        }
    };
    this._x3f = function (g, j, f, m) {
        if (j < 0 || g < 0) {
            throw "Left and top must be nonnegative"
        }
        if (m < 1 || f < 1) {
            throw "Height and width must be at least 1"
        }
        var l = g + f;
        var e = j + m;
        if (e > this.height || l > this.width) {
            throw "The region must fit inside the matrix"
        }
        for (var i = j; i < e; i++) {
            var h = i * this.rowSize;
            for (var k = g; k < l; k++) {
                this.bits[h + (k >> 5)] |= 1 << (k & 31)
            }
        }
    }
}
function _x68(a, b) {
    this._x71 = a;
    this._x72 = b;
    this.__defineGetter__("_x70", function () {
        return this._x71
    });
    this.__defineGetter__("Codewords", function () {
        return this._x72
    })
}
_x68._xb4 = function (c, h, s) {
    if (c.length != h._x6c) {
        throw "_xbc"
    }
    var k = h._x40(s);
    var e = 0;
    var d = k._x90();
    for (var r = 0; r < d.length; r++) {
        e += d[r].Count
    }
    var l = new Array(e);
    var n = 0;
    for (var o = 0; o < d.length; o++) {
        var f = d[o];
        for (var r = 0; r < f.Count; r++) {
            var m = f._x69;
            var t = k._x3b + m;
            l[n++] = new _x68(m, new Array(t))
        }
    }
    var u = l[0]._x72.length;
    var b = l.length - 1;
    while (b >= 0) {
        var w = l[b]._x72.length;
        if (w == u) {
            break
        }
        b--
    }
    b++;
    var g = u - k._x3b;
    var a = 0;
    for (var r = 0; r < g; r++) {
        for (var o = 0; o < n; o++) {
            l[o]._x72[r] = c[a++]
        }
    }
    for (var o = b; o < n; o++) {
        l[o]._x72[g] = c[a++]
    }
    var q = l[0]._x72.length;
    for (var r = g; r < q; r++) {
        for (var o = 0; o < n; o++) {
            var v = o < b ? r : r + 1;
            l[o]._x72[v] = c[a++]
        }
    }
    return l
};

function _x51(a) {
    var b = a.Dimension;
    if (b < 21 || (b & 3) != 1) {
        throw "Error _x51"
    }
    this._x26 = a;
    this._x56 = null;
    this._x54 = null;
    this._x67 = function (d, c, e) {
        return this._x26._x6e(d, c) ? (e << 1) | 1 : e << 1
    };
    this._x52 = function () {
        if (this._x54 != null) {
            return this._x54
        }
        var g = 0;
        for (var e = 0; e < 6; e++) {
            g = this._x67(e, 8, g)
        }
        g = this._x67(7, 8, g);
        g = this._x67(8, 8, g);
        g = this._x67(8, 7, g);
        for (var c = 5; c >= 0; c--) {
            g = this._x67(8, c, g)
        }
        this._x54 = _x2a._x4e(g);
        if (this._x54 != null) {
            return this._x54
        }
        var f = this._x26.Dimension;
        g = 0;
        var d = f - 8;
        for (var e = f - 1; e >= d; e--) {
            g = this._x67(e, 8, g)
        }
        for (var c = f - 7; c < f; c++) {
            g = this._x67(8, c, g)
        }
        this._x54 = _x2a._x4e(g);
        if (this._x54 != null) {
            return this._x54
        }
        throw "Error _x52"
    };
    this._x55 = function () {
        if (this._x56 != null) {
            return this._x56
        }
        var h = this._x26.Dimension;
        var f = (h - 17) >> 2;
        if (f <= 6) {
            return _x22._x27(f)
        }
        var g = 0;
        var e = h - 11;
        for (var c = 5; c >= 0; c--) {
            for (var d = h - 9; d >= e; d--) {
                g = this._x67(d, c, g)
            }
        }
        this._x56 = _x22._x29(g);
        if (this._x56 != null && this._x56._x57 == h) {
            return this._x56
        }
        g = 0;
        for (var d = 5; d >= 0; d--) {
            for (var c = h - 9; c >= e; c--) {
                g = this._x67(d, c, g)
            }
        }
        this._x56 = _x22._x29(g);
        if (this._x56 != null && this._x56._x57 == h) {
            return this._x56
        }
        throw "Error _x55"
    };
    this._xb1 = function () {
        var r = this._x52();
        var o = this._x55();
        var c = _x73._xb2(r._x73);
        var f = this._x26.Dimension;
        c._x66(this._x26, f);
        var k = o._x25();
        var n = true;
        var s = new Array(o._x6c);
        var m = 0;
        var q = 0;
        var h = 0;
        for (var e = f - 1; e > 0; e -= 2) {
            if (e == 6) {
                e--
            }
            for (var l = 0; l < f; l++) {
                var g = n ? f - 1 - l : l;
                for (var d = 0; d < 2; d++) {
                    if (!k._x6e(e - d, g)) {
                        h++;
                        q <<= 1;
                        if (this._x26._x6e(e - d, g)) {
                            q |= 1
                        }
                        if (h == 8) {
                            s[m++] = q;
                            h = 0;
                            q = 0
                        }
                    }
                }
            }
            n ^= true
        }
        if (m != o._x6c) {
            throw "Error _xb1"
        }
        return s
    }
}
_x73 = {};
_x73._xb2 = function (a) {
    if (a < 0 || a > 7) {
        throw "System._xbc"
    }
    return _x73._x74[a]
};

function _x95() {
    this._x66 = function (c, d) {
        for (var b = 0; b < d; b++) {
            for (var a = 0; a < d; a++) {
                if (this._xa4(b, a)) {
                    c.flip(a, b)
                }
            }
        }
    };
    this._xa4 = function (b, a) {
        return ((b + a) & 1) == 0
    }
}
function _x96() {
    this._x66 = function (c, d) {
        for (var b = 0; b < d; b++) {
            for (var a = 0; a < d; a++) {
                if (this._xa4(b, a)) {
                    c.flip(a, b)
                }
            }
        }
    };
    this._xa4 = function (b, a) {
        return (b & 1) == 0
    }
}
function _x97() {
    this._x66 = function (c, d) {
        for (var b = 0; b < d; b++) {
            for (var a = 0; a < d; a++) {
                if (this._xa4(b, a)) {
                    c.flip(a, b)
                }
            }
        }
    };
    this._xa4 = function (b, a) {
        return a % 3 == 0
    }
}
function _x98() {
    this._x66 = function (c, d) {
        for (var b = 0; b < d; b++) {
            for (var a = 0; a < d; a++) {
                if (this._xa4(b, a)) {
                    c.flip(a, b)
                }
            }
        }
    };
    this._xa4 = function (b, a) {
        return (b + a) % 3 == 0
    }
}
function _x99() {
    this._x66 = function (c, d) {
        for (var b = 0; b < d; b++) {
            for (var a = 0; a < d; a++) {
                if (this._xa4(b, a)) {
                    c.flip(a, b)
                }
            }
        }
    };
    this._xa4 = function (b, a) {
        return (((_x8b(b, 1)) + (a / 3)) & 1) == 0
    }
}
function _x9a() {
    this._x66 = function (c, d) {
        for (var b = 0; b < d; b++) {
            for (var a = 0; a < d; a++) {
                if (this._xa4(b, a)) {
                    c.flip(a, b)
                }
            }
        }
    };
    this._xa4 = function (c, b) {
        var a = c * b;
        return (a & 1) + (a % 3) == 0
    }
}
function _x9b() {
    this._x66 = function (c, d) {
        for (var b = 0; b < d; b++) {
            for (var a = 0; a < d; a++) {
                if (this._xa4(b, a)) {
                    c.flip(a, b)
                }
            }
        }
    };
    this._xa4 = function (c, b) {
        var a = c * b;
        return (((a & 1) + (a % 3)) & 1) == 0
    }
}
function _x9c() {
    this._x66 = function (c, d) {
        for (var b = 0; b < d; b++) {
            for (var a = 0; a < d; a++) {
                if (this._xa4(b, a)) {
                    c.flip(a, b)
                }
            }
        }
    };
    this._xa4 = function (b, a) {
        return ((((b + a) & 1) + ((b * a) % 3)) & 1) == 0
    }
}
_x73._x74 = new Array(new _x95(), new _x96(), new _x97(), new _x98(), new _x99(), new _x9a(), new _x9b(), new _x9c());

function _x5e(_x8f) {
    this._x8f = _x8f;
    this.decode = function (received, _xa3) {
        var poly = new _x3c(this._x8f, received);
        var _x64 = new Array(_xa3);
        for (var i = 0; i < _x64.length; i++) {
            _x64[i] = 0
        }
        var _xa1 = false;
        var noError = true;
        for (var i = 0; i < _xa3; i++) {
            var eval = poly.evaluateAt(this._x8f.exp(_xa1 ? i + 1 : i));
            _x64[_x64.length - 1 - i] = eval;
            if (eval != 0) {
                noError = false
            }
        }
        if (noError) {
            return
        }
        var _xa2 = new _x3c(this._x8f, _x64);
        var _x63 = this._x77(this._x8f._x2d(_xa3, 1), _xa2, _xa3);
        var sigma = _x63[0];
        var omega = _x63[1];
        var _x75 = this._x8d(sigma);
        var _x76 = this._x65(omega, _x75, _xa1);
        for (var i = 0; i < _x75.length; i++) {
            var position = received.length - 1 - this._x8f.log(_x75[i]);
            if (position < 0) {
                throw "ReedSolomonException Bad error location"
            }
            received[position] = _x2c._x30(received[position], _x76[i])
        }
    };
    this._x77 = function (a, b, R) {
        if (a._x78 < b._x78) {
            var temp = a;
            a = b;
            b = temp
        }
        var rLast = a;
        var r = b;
        var sLast = this._x8f.One;
        var s = this._x8f.Zero;
        var tLast = this._x8f.Zero;
        var t = this._x8f.One;
        while (r._x78 >= Math.floor(R / 2)) {
            var rLastLast = rLast;
            var _xa8 = sLast;
            var _xa9 = tLast;
            rLast = r;
            sLast = s;
            tLast = t;
            if (rLast.Zero) {
                throw "r_{i-1} was zero"
            }
            r = rLastLast;
            var q = this._x8f.Zero;
            var _x62 = rLast._x8c(rLast._x78);
            var _xa6 = this._x8f.inverse(_x62);
            while (r._x78 >= rLast._x78 && !r.Zero) {
                var _xa5 = r._x78 - rLast._x78;
                var scale = this._x8f.multiply(r._x8c(r._x78), _xa6);
                q = q._x30(this._x8f._x2d(_xa5, scale));
                r = r._x30(rLast._x5f(_xa5, scale))
            }
            s = q.multiply1(sLast)._x30(_xa8);
            t = q.multiply1(tLast)._x30(_xa9)
        }
        var _x61 = t._x8c(0);
        if (_x61 == 0) {
            throw "ReedSolomonException sigmaTilde(0) was zero"
        }
        var inverse = this._x8f.inverse(_x61);
        var sigma = t.multiply2(inverse);
        var omega = r.multiply2(inverse);
        return new Array(sigma, omega)
    };
    this._x8d = function (_x8e) {
        var _xa7 = _x8e._x78;
        if (_xa7 == 1) {
            return new Array(_x8e._x8c(1))
        }
        var result = new Array(_xa7);
        var e = 0;
        for (var i = 1; i < 256 && e < _xa7; i++) {
            if (_x8e.evaluateAt(i) == 0) {
                result[e] = this._x8f.inverse(i);
                e++
            }
        }
        if (e != _xa7) {
            throw "Error locator degree does not match number of roots"
        }
        return result
    };
    this._x65 = function (_xa0, _x75, _xa1) {
        var s = _x75.length;
        var result = new Array(s);
        for (var i = 0; i < s; i++) {
            var _xaa = this._x8f.inverse(_x75[i]);
            var _x6d = 1;
            for (var j = 0; j < s; j++) {
                if (i != j) {
                    _x6d = this._x8f.multiply(_x6d, _x2c._x30(1, this._x8f.multiply(_x75[j], _xaa)))
                }
            }
            result[i] = this._x8f.multiply(_xa0.evaluateAt(_xaa), this._x8f.inverse(_x6d));
            if (_xa1) {
                result[i] = this._x8f.multiply(result[i], _xaa)
            }
        }
        return result
    }
}
function _x3c(f, e) {
    if (e == null || e.length == 0) {
        throw "System._xbc"
    }
    this._x8f = f;
    var c = e.length;
    if (c > 1 && e[0] == 0) {
        var d = 1;
        while (d < c && e[d] == 0) {
            d++
        }
        if (d == c) {
            this._x60 = f.Zero._x60
        } else {
            this._x60 = new Array(c - d);
            for (var b = 0; b < this._x60.length; b++) {
                this._x60[b] = 0
            }
            for (var a = 0; a < this._x60.length; a++) {
                this._x60[a] = e[d + a]
            }
        }
    } else {
        this._x60 = e
    }
    this.__defineGetter__("Zero", function () {
        return this._x60[0] == 0
    });
    this.__defineGetter__("_x78", function () {
        return this._x60.length - 1
    });
    this.__defineGetter__("Coefficients", function () {
        return this._x60
    });
    this._x8c = function (g) {
        return this._x60[this._x60.length - 1 - g]
    };
    this.evaluateAt = function (h) {
        if (h == 0) {
            return this._x8c(0)
        }
        var l = this._x60.length;
        if (h == 1) {
            var g = 0;
            for (var k = 0; k < l; k++) {
                g = _x2c._x30(g, this._x60[k])
            }
            return g
        }
        var j = this._x60[0];
        for (var k = 1; k < l; k++) {
            j = _x2c._x30(this._x8f.multiply(h, j), this._x60[k])
        }
        return j
    };
    this._x30 = function (g) {
        if (this._x8f != g._x8f) {
            throw "GF256Polys do not have same _x2c _x8f"
        }
        if (this.Zero) {
            return g
        }
        if (g.Zero) {
            return this
        }
        var o = this._x60;
        var n = g._x60;
        if (o.length > n.length) {
            var j = o;
            o = n;
            n = j
        }
        var h = new Array(n.length);
        var k = n.length - o.length;
        for (var m = 0; m < k; m++) {
            h[m] = n[m]
        }
        for (var l = k; l < n.length; l++) {
            h[l] = _x2c._x30(o[l - k], n[l])
        }
        return new _x3c(f, h)
    };
    this.multiply1 = function (o) {
        if (this._x8f != o._x8f) {
            throw "GF256Polys do not have same _x2c _x8f"
        }
        if (this.Zero || o.Zero) {
            return this._x8f.Zero
        }
        var r = this._x60;
        var g = r.length;
        var l = o._x60;
        var n = l.length;
        var q = new Array(g + n - 1);
        for (var m = 0; m < g; m++) {
            var h = r[m];
            for (var k = 0; k < n; k++) {
                q[m + k] = _x2c._x30(q[m + k], this._x8f.multiply(h, l[k]))
            }
        }
        return new _x3c(this._x8f, q)
    };
    this.multiply2 = function (g) {
        if (g == 0) {
            return this._x8f.Zero
        }
        if (g == 1) {
            return this
        }
        var j = this._x60.length;
        var k = new Array(j);
        for (var h = 0; h < j; h++) {
            k[h] = this._x8f.multiply(this._x60[h], g)
        }
        return new _x3c(this._x8f, k)
    };
    this._x5f = function (l, g) {
        if (l < 0) {
            throw "System._xbc"
        }
        if (g == 0) {
            return this._x8f.Zero
        }
        var j = this._x60.length;
        var k = new Array(j + l);
        for (var h = 0; h < k.length; h++) {
            k[h] = 0
        }
        for (var h = 0; h < j; h++) {
            k[h] = this._x8f.multiply(this._x60[h], g)
        }
        return new _x3c(this._x8f, k)
    };
    this.divide = function (l) {
        if (this._x8f != l._x8f) {
            throw "GF256Polys do not have same _x2c _x8f"
        }
        if (l.Zero) {
            throw "Divide by 0"
        }
        var j = this._x8f.Zero;
        var o = this;
        var g = l._x8c(l._x78);
        var n = this._x8f.inverse(g);
        while (o._x78 >= l._x78 && !o.Zero) {
            var m = o._x78 - l._x78;
            var h = this._x8f.multiply(o._x8c(o._x78), n);
            var i = l._x5f(m, h);
            var k = this._x8f._x2d(m, h);
            j = j._x30(k);
            o = o._x30(i)
        }
        return new Array(j, o)
    }
}
function _x2c(b) {
    this._xae = new Array(256);
    this._xaf = new Array(256);
    var a = 1;
    for (var e = 0; e < 256; e++) {
        this._xae[e] = a;
        a <<= 1;
        if (a >= 256) {
            a ^= b
        }
    }
    for (var e = 0; e < 255; e++) {
        this._xaf[this._xae[e]] = e
    }
    var d = new Array(1);
    d[0] = 0;
    this.zero = new _x3c(this, new Array(d));
    var c = new Array(1);
    c[0] = 1;
    this.one = new _x3c(this, new Array(c));
    this.__defineGetter__("Zero", function () {
        return this.zero
    });
    this.__defineGetter__("One", function () {
        return this.one
    });
    this._x2d = function (j, f) {
        if (j < 0) {
            throw "System._xbc"
        }
        if (f == 0) {
            return zero
        }
        var h = new Array(j + 1);
        for (var g = 0; g < h.length; g++) {
            h[g] = 0
        }
        h[0] = f;
        return new _x3c(this, h)
    };
    this.exp = function (f) {
        return this._xae[f]
    };
    this.log = function (f) {
        if (f == 0) {
            throw "System._xbc"
        }
        return this._xaf[f]
    };
    this.inverse = function (f) {
        if (f == 0) {
            throw "System.ArithmeticException"
        }
        return this._xae[255 - this._xaf[f]]
    };
    this.multiply = function (g, f) {
        if (g == 0 || f == 0) {
            return 0
        }
        if (g == 1) {
            return f
        }
        if (f == 1) {
            return g
        }
        return this._xae[(this._xaf[g] + this._xaf[f]) % 255]
    }
}
_x2c._x2e = new _x2c(285);
_x2c._x2f = new _x2c(301);
_x2c._x30 = function (d, c) {
    return d ^ c
};
Decoder = {};
Decoder.rsDecoder = new _x5e(_x2c._x2e);
Decoder.correctErrors = function (g, b) {
    var d = g.length;
    var f = new Array(d);
    for (var e = 0; e < d; e++) {
        f[e] = g[e] & 255
    }
    var a = g.length - b;
    try {
        Decoder.rsDecoder.decode(f, a)
    } catch (c) {
        throw c
    }
    for (var e = 0; e < b; e++) {
        g[e] = f[e]
    }
};
Decoder.decode = function (r) {
    var b = new _x51(r);
    var o = b._x55();
    var c = b._x52()._x4c;
    var q = b._xb1();
    var a = _x68._xb4(q, o, c);
    var f = 0;
    for (var k = 0; k < a.Length; k++) {
        f += a[k]._x70
    }
    var e = new Array(f);
    var n = 0;
    for (var h = 0; h < a.length; h++) {
        var m = a[h];
        var d = m.Codewords;
        var g = m._x70;
        Decoder.correctErrors(d, g);
        for (var k = 0; k < g; k++) {
            e[n++] = d[k]
        }
    }
    var l = new QRCodeDataBlockReader(e, o._x92, c.Bits);
    return l
};
qrcode = {};
qrcode.imagedata = null;
qrcode.width = 0;
qrcode.height = 0;
qrcode.qrCodeSymbol = null;
qrcode._x84 = [
    [10, 9, 8, 8],
    [12, 11, 16, 10],
    [14, 13, 16, 12]
];
qrcode.callback = null;
qrcode.decode = function (d) {
    if (arguments.length == 0) {
        var b = document.getElementById("qr-canvas");
        var a = b.getContext("2d");
        qrcode.width = b.width;
        qrcode.height = b.height;
        qrcode.imagedata = a.getImageData(0, 0, qrcode.width, qrcode.height);
        qrcode.result = qrcode.process(a);
        if (qrcode.callback != null) {
            qrcode.callback(qrcode.result)
        }
        return qrcode.result
    } else {
        var c = new Image();
        c.onload = function () {
            var i = document.createElement("canvas");
            var h = i.getContext("2d");
            var f = document.getElementById("out-canvas");
            if (f != null) {
                var g = f.getContext("2d");
                g.clearRect(0, 0, 320, 240);
                g.drawImage(c, 0, 0, 320, 240)
            }
            i.width = c.width;
            i.height = c.height;
            h.drawImage(c, 0, 0);
            qrcode.width = c.width;
            qrcode.height = c.height;
            try {
                qrcode.imagedata = h.getImageData(0, 0, c.width, c.height)
            } catch (j) {
                qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
                if (qrcode.callback != null) {
                    qrcode.callback(qrcode.result)
                }
                return
            }
            try {
                qrcode.result = qrcode.process(h)
            } catch (j) {
                console.log(j);
                qrcode.result = null;
            }
            if (qrcode.callback != null) {
                qrcode.callback(qrcode.result)
            }
        };
        c.src = d
    }
};
qrcode.process = function (o) {
    var a = new Date().getTime();
    var c = qrcode.grayScaleToBitmap(qrcode.grayscale());
    var m = new _x48()._x4a(c);
    var h = new Detector(c);
    var n = h.detect();
    o.putImageData(qrcode.imagedata, 0, 0);
    var k = Decoder.decode(n.bits);
    var g = k.DataByte;
    var l = "";
    for (var f = 0; f < g.length; f++) {
        for (var e = 0; e < g[f].length; e++) {
            l += String.fromCharCode(g[f][e])
        }
    }
    var d = new Date().getTime();
    var b = d - a;
    console.log(b);
    return l
};
qrcode.getPixel = function (a, b) {
    if (qrcode.width < a) {
        throw "point error"
    }
    if (qrcode.height < b) {
        throw "point error"
    }
    point = (a * 4) + (b * qrcode.width * 4);
    p = (qrcode.imagedata.data[point] * 30 + qrcode.imagedata.data[point + 1] * 59 + qrcode.imagedata.data[point + 2] * 11) / 100;
    return p
};
qrcode.binarize = function (d) {
    var c = new Array(qrcode.width * qrcode.height);
    for (var e = 0; e < qrcode.height; e++) {
        for (var b = 0; b < qrcode.width; b++) {
            var a = qrcode.getPixel(b, e);
            c[b + e * qrcode.width] = a <= d ? true : false
        }
    }
    return c
};
qrcode._x82 = function (d) {
    var c = 4;
    var k = Math.floor(qrcode.width / c);
    var j = Math.floor(qrcode.height / c);
    var f = new Array(c);
    for (var g = 0; g < c; g++) {
        f[g] = new Array(c);
        for (var e = 0; e < c; e++) {
            f[g][e] = new Array(0, 0)
        }
    }
    for (var o = 0; o < c; o++) {
        for (var a = 0; a < c; a++) {
            f[a][o][0] = 255;
            for (var l = 0; l < j; l++) {
                for (var n = 0; n < k; n++) {
                    var h = d[k * a + n + (j * o + l) * qrcode.width];
                    if (h < f[a][o][0]) {
                        f[a][o][0] = h
                    }
                    if (h > f[a][o][1]) {
                        f[a][o][1] = h
                    }
                }
            }
        }
    }
    var m = new Array(c);
    for (var b = 0; b < c; b++) {
        m[b] = new Array(c)
    }
    for (var o = 0; o < c; o++) {
        for (var a = 0; a < c; a++) {
            m[a][o] = Math.floor((f[a][o][0] + f[a][o][1]) / 2)
        }
    }
    return m
};
qrcode.grayScaleToBitmap = function (f) {
    var j = qrcode._x82(f);
    var b = j.length;
    var e = Math.floor(qrcode.width / b);
    var d = Math.floor(qrcode.height / b);
    var c = new Array(qrcode.height * qrcode.width);
    for (var i = 0; i < b; i++) {
        for (var a = 0; a < b; a++) {
            for (var g = 0; g < d; g++) {
                for (var h = 0; h < e; h++) {
                    c[e * a + h + (d * i + g) * qrcode.width] = (f[e * a + h + (d * i + g) * qrcode.width] < j[a][i]) ? true : false
                }
            }
        }
    }
    return c
};
qrcode.grayscale = function () {
    var c = new Array(qrcode.width * qrcode.height);
    for (var d = 0; d < qrcode.height; d++) {
        for (var b = 0; b < qrcode.width; b++) {
            var a = qrcode.getPixel(b, d);
            c[b + d * qrcode.width] = a
        }
    }
    return c
};

function _x8b(a, b) {
    if (a >= 0) {
        return a >> b
    } else {
        return (a >> b) + (2 << ~b)
    }
}
ArrayRemove = function (array, c, b) {
    var a = array.slice((b || c) + 1 || array.length);
    array.length = c < 0 ? array.length + c : c;
    return array.push.apply(array, a)
};
var _xad = 3;
var _x7d = 57;
var _x81 = 8;
var _x7c = 2;
qrcode._x86 = function (c) {
    function b(l, k) {
        xDiff = l.X - k.X;
        yDiff = l.Y - k.Y;
        return Math.sqrt((xDiff * xDiff + yDiff * yDiff))
    }
    function d(k, o, n) {
        var m = o.x;
        var l = o.y;
        return ((n.x - m) * (k.y - l)) - ((n.y - l) * (k.x - m))
    }
    var i = b(c[0], c[1]);
    var f = b(c[1], c[2]);
    var e = b(c[0], c[2]);
    var a, j, h;
    if (f >= i && f >= e) {
        j = c[0];
        a = c[1];
        h = c[2]
    } else {
        if (e >= f && e >= i) {
            j = c[1];
            a = c[0];
            h = c[2]
        } else {
            j = c[2];
            a = c[0];
            h = c[1]
        }
    }
    if (d(a, j, h) < 0) {
        var g = a;
        a = h;
        h = g
    }
    c[0] = a;
    c[1] = j;
    c[2] = h
};

function _x5c(c, a, b) {
    this.x = c;
    this.y = a;
    this.count = 1;
    this._x19 = b;
    this.__defineGetter__("_x7e", function () {
        return this._x19
    });
    this.__defineGetter__("Count", function () {
        return this.count
    });
    this.__defineGetter__("X", function () {
        return this.x
    });
    this.__defineGetter__("Y", function () {
        return this.y
    });
    this._x80 = function () {
        this.count++
    };
    this._x8a = function (f, e, d) {
        if (Math.abs(e - this.y) <= f && Math.abs(d - this.x) <= f) {
            var g = Math.abs(f - this._x19);
            return g <= 1 || g / this._x19 <= 1
        }
        return false
    }
}
function _x87(a) {
    this._xb5 = a[0];
    this._xba = a[1];
    this._xb7 = a[2];
    this.__defineGetter__("_xb6", function () {
        return this._xb5
    });
    this.__defineGetter__("_xb9", function () {
        return this._xba
    });
    this.__defineGetter__("_xb8", function () {
        return this._xb7
    })
}
function _x48() {
    this.image = null;
    this._x59 = [];
    this._xac = false;
    this._x1b = new Array(0, 0, 0, 0, 0);
    this._x1c = null;
    this.__defineGetter__("_x5d", function () {
        this._x1b[0] = 0;
        this._x1b[1] = 0;
        this._x1b[2] = 0;
        this._x1b[3] = 0;
        this._x1b[4] = 0;
        return this._x1b
    });
    this._x1e = function (f) {
        var b = 0;
        for (var d = 0; d < 5; d++) {
            var e = f[d];
            if (e == 0) {
                return false
            }
            b += e
        }
        if (b < 7) {
            return false
        }
        var c = Math.floor((b << _x81) / 7);
        var a = Math.floor(c / 2);
        return Math.abs(c - (f[0] << _x81)) < a && Math.abs(c - (f[1] << _x81)) < a && Math.abs(3 * c - (f[2] << _x81)) < 3 * a && Math.abs(c - (f[3] << _x81)) < a && Math.abs(c - (f[4] << _x81)) < a
    };
    this._x1d = function (b, a) {
        return (a - b[4] - b[3]) - b[2] / 2
    };
    this._x1f = function (a, j, d, g) {
        var c = this.image;
        var h = qrcode.height;
        var b = this._x5d;
        var f = a;
        while (f >= 0 && c[j + f * qrcode.width]) {
            b[2]++;
            f--
        }
        if (f < 0) {
            return NaN
        }
        while (f >= 0 && !c[j + f * qrcode.width] && b[1] <= d) {
            b[1]++;
            f--
        }
        if (f < 0 || b[1] > d) {
            return NaN
        }
        while (f >= 0 && c[j + f * qrcode.width] && b[0] <= d) {
            b[0]++;
            f--
        }
        if (b[0] > d) {
            return NaN
        }
        f = a + 1;
        while (f < h && c[j + f * qrcode.width]) {
            b[2]++;
            f++
        }
        if (f == h) {
            return NaN
        }
        while (f < h && !c[j + f * qrcode.width] && b[3] < d) {
            b[3]++;
            f++
        }
        if (f == h || b[3] >= d) {
            return NaN
        }
        while (f < h && c[j + f * qrcode.width] && b[4] < d) {
            b[4]++;
            f++
        }
        if (b[4] >= d) {
            return NaN
        }
        var e = b[0] + b[1] + b[2] + b[3] + b[4];
        if (5 * Math.abs(e - g) >= 2 * g) {
            return NaN
        }
        return this._x1e(b) ? this._x1d(b, f) : NaN
    };
    this._x7f = function (b, a, e, h) {
        var d = this.image;
        var i = qrcode.width;
        var c = this._x5d;
        var g = b;
        while (g >= 0 && d[g + a * qrcode.width]) {
            c[2]++;
            g--
        }
        if (g < 0) {
            return NaN
        }
        while (g >= 0 && !d[g + a * qrcode.width] && c[1] <= e) {
            c[1]++;
            g--
        }
        if (g < 0 || c[1] > e) {
            return NaN
        }
        while (g >= 0 && d[g + a * qrcode.width] && c[0] <= e) {
            c[0]++;
            g--
        }
        if (c[0] > e) {
            return NaN
        }
        g = b + 1;
        while (g < i && d[g + a * qrcode.width]) {
            c[2]++;
            g++
        }
        if (g == i) {
            return NaN
        }
        while (g < i && !d[g + a * qrcode.width] && c[3] < e) {
            c[3]++;
            g++
        }
        if (g == i || c[3] >= e) {
            return NaN
        }
        while (g < i && d[g + a * qrcode.width] && c[4] < e) {
            c[4]++;
            g++
        }
        if (c[4] >= e) {
            return NaN
        }
        var f = c[0] + c[1] + c[2] + c[3] + c[4];
        if (5 * Math.abs(f - h) >= h) {
            return NaN
        }
        return this._x1e(c) ? this._x1d(c, g) : NaN
    };
    this._x58 = function (c, f, e) {
        var d = c[0] + c[1] + c[2] + c[3] + c[4];
        var n = this._x1d(c, e);
        var b = this._x1f(f, Math.floor(n), c[2], d);
        if (!isNaN(b)) {
            n = this._x7f(Math.floor(n), Math.floor(b), c[2], d);
            if (!isNaN(n)) {
                var l = d / 7;
                var m = false;
                var h = this._x59.length;
                for (var g = 0; g < h; g++) {
                    var a = this._x59[g];
                    if (a._x8a(l, b, n)) {
                        a._x80();
                        m = true;
                        break
                    }
                }
                if (!m) {
                    var k = new _x5c(n, b, l);
                    this._x59.push(k);
                    if (this._x1c != null) {
                        this._x1c._x85(k)
                    }
                }
                return true
            }
        }
        return false
    };
    this._x7a = function () {
        var a = this._x59.length;
        if (a < 3) {
            throw "Couldn't find enough finder patterns"
        }
        if (a > 3) {
            var b = 0;
            for (var c = 0; c < a; c++) {
                b += this._x59[c]._x7e
            }
            var d = b / a;
            for (var c = 0; c < this._x59.length && this._x59.length > 3; c++) {
                var e = this._x59[c];
                if (Math.abs(e._x7e - d) > 0.2 * d) {
                    ArrayRemove(this._x59, c);
                    c--
                }
            }
        }
        if (this._x59.Count > 3) {}
        return new Array(this._x59[0], this._x59[1], this._x59[2])
    };
    this._x88 = function () {
        var b = this._x59.length;
        if (b <= 1) {
            return 0
        }
        var c = null;
        for (var d = 0; d < b; d++) {
            var a = this._x59[d];
            if (a.Count >= _x7c) {
                if (c == null) {
                    c = a
                } else {
                    this._xac = true;
                    return Math.floor((Math.abs(c.X - a.X) - Math.abs(c.Y - a.Y)) / 2)
                }
            }
        }
        return 0
    };
    this._x5b = function () {
        var g = 0;
        var c = 0;
        var a = this._x59.length;
        for (var d = 0; d < a; d++) {
            var f = this._x59[d];
            if (f.Count >= _x7c) {
                g++;
                c += f._x7e
            }
        }
        if (g < 3) {
            return false
        }
        var e = c / a;
        var b = 0;
        for (var d = 0; d < a; d++) {
            f = this._x59[d];
            b += Math.abs(f._x7e - e)
        }
        return b <= 0.05 * c
    };
    this._x4a = function (e) {
        var o = false;
        this.image = e;
        var n = qrcode.height;
        var k = qrcode.width;
        var a = Math.floor((3 * n) / (4 * _x7d));
        if (a < _xad || o) {
            a = _xad
        }
        var g = false;
        var d = new Array(5);
        for (var h = a - 1; h < n && !g; h += a) {
            d[0] = 0;
            d[1] = 0;
            d[2] = 0;
            d[3] = 0;
            d[4] = 0;
            var b = 0;
            for (var f = 0; f < k; f++) {
                if (e[f + h * qrcode.width]) {
                    if ((b & 1) == 1) {
                        b++
                    }
                    d[b]++
                } else {
                    if ((b & 1) == 0) {
                        if (b == 4) {
                            if (this._x1e(d)) {
                                var c = this._x58(d, h, f);
                                if (c) {
                                    a = 2;
                                    if (this._xac) {
                                        g = this._x5b()
                                    } else {
                                        var m = this._x88();
                                        if (m > d[2]) {
                                            h += m - d[2] - a;
                                            f = k - 1
                                        }
                                    }
                                } else {
                                    do {
                                        f++
                                    } while (f < k && !e[f + h * qrcode.width]);
                                    f--
                                }
                                b = 0;
                                d[0] = 0;
                                d[1] = 0;
                                d[2] = 0;
                                d[3] = 0;
                                d[4] = 0
                            } else {
                                d[0] = d[2];
                                d[1] = d[3];
                                d[2] = d[4];
                                d[3] = 1;
                                d[4] = 0;
                                b = 3
                            }
                        } else {
                            d[++b]++
                        }
                    } else {
                        d[b]++
                    }
                }
            }
            if (this._x1e(d)) {
                var c = this._x58(d, h, k);
                if (c) {
                    a = d[0];
                    if (this._xac) {
                        g = _x5b()
                    }
                }
            }
        }
        var l = this._x7a();
        qrcode._x86(l);
        return new _x87(l)
    }
}
function _x18(c, a, b) {
    this.x = c;
    this.y = a;
    this.count = 1;
    this._x19 = b;
    this.__defineGetter__("_x7e", function () {
        return this._x19
    });
    this.__defineGetter__("Count", function () {
        return this.count
    });
    this.__defineGetter__("X", function () {
        return Math.floor(this.x)
    });
    this.__defineGetter__("Y", function () {
        return Math.floor(this.y)
    });
    this._x80 = function () {
        this.count++
    };
    this._x8a = function (f, e, d) {
        if (Math.abs(e - this.y) <= f && Math.abs(d - this.x) <= f) {
            var g = Math.abs(f - this._x19);
            return g <= 1 || g / this._x19 <= 1
        }
        return false
    }
}
function _x1a(g, c, b, f, a, e, d) {
    this.image = g;
    this._x59 = new Array();
    this.startX = c;
    this.startY = b;
    this.width = f;
    this.height = a;
    this._x7b = e;
    this._x1b = new Array(0, 0, 0);
    this._x1c = d;
    this._x1d = function (i, h) {
        return (h - i[2]) - i[1] / 2
    };
    this._x1e = function (l) {
        var k = this._x7b;
        var h = k / 2;
        for (var j = 0; j < 3; j++) {
            if (Math.abs(k - l[j]) >= h) {
                return false
            }
        }
        return true
    };
    this._x1f = function (h, r, l, o) {
        var k = this.image;
        var q = qrcode.height;
        var j = this._x1b;
        j[0] = 0;
        j[1] = 0;
        j[2] = 0;
        var n = h;
        while (n >= 0 && k[r + n * qrcode.width] && j[1] <= l) {
            j[1]++;
            n--
        }
        if (n < 0 || j[1] > l) {
            return NaN
        }
        while (n >= 0 && !k[r + n * qrcode.width] && j[0] <= l) {
            j[0]++;
            n--
        }
        if (j[0] > l) {
            return NaN
        }
        n = h + 1;
        while (n < q && k[r + n * qrcode.width] && j[1] <= l) {
            j[1]++;
            n++
        }
        if (n == q || j[1] > l) {
            return NaN
        }
        while (n < q && !k[r + n * qrcode.width] && j[2] <= l) {
            j[2]++;
            n++
        }
        if (j[2] > l) {
            return NaN
        }
        var m = j[0] + j[1] + j[2];
        if (5 * Math.abs(m - o) >= 2 * o) {
            return NaN
        }
        return this._x1e(j) ? this._x1d(j, n) : NaN
    };
    this._x58 = function (l, o, n) {
        var m = l[0] + l[1] + l[2];
        var u = this._x1d(l, n);
        var k = this._x1f(o, Math.floor(u), 2 * l[1], m);
        if (!isNaN(k)) {
            var t = (l[0] + l[1] + l[2]) / 3;
            var r = this._x59.length;
            for (var q = 0; q < r; q++) {
                var h = this._x59[q];
                if (h._x8a(t, k, u)) {
                    return new _x18(u, k, t)
                }
            }
            var s = new _x18(u, k, t);
            this._x59.push(s);
            if (this._x1c != null) {
                this._x1c._x85(s)
            }
        }
        return null
    };
    this.find = function () {
        var q = this.startX;
        var t = this.height;
        var r = q + f;
        var s = b + (t >> 1);
        var m = new Array(0, 0, 0);
        for (var k = 0; k < t; k++) {
            var o = s + ((k & 1) == 0 ? ((k + 1) >> 1) : -((k + 1) >> 1));
            m[0] = 0;
            m[1] = 0;
            m[2] = 0;
            var n = q;
            while (n < r && !g[n + qrcode.width * o]) {
                n++
            }
            var h = 0;
            while (n < r) {
                if (g[n + o * qrcode.width]) {
                    if (h == 1) {
                        m[h]++
                    } else {
                        if (h == 2) {
                            if (this._x1e(m)) {
                                var l = this._x58(m, o, n);
                                if (l != null) {
                                    return l
                                }
                            }
                            m[0] = m[2];
                            m[1] = 1;
                            m[2] = 0;
                            h = 1
                        } else {
                            m[++h]++
                        }
                    }
                } else {
                    if (h == 1) {
                        h++
                    }
                    m[h]++
                }
                n++
            }
            if (this._x1e(m)) {
                var l = this._x58(m, o, r);
                if (l != null) {
                    return l
                }
            }
        }
        if (!(this._x59.length == 0)) {
            return this._x59[0]
        }
        throw "Couldn't find enough alignment patterns"
    }
}
function QRCodeDataBlockReader(c, a, b) {
    this._x79 = 0;
    this._x5a = 7;
    this._xc2 = 0;
    this.blocks = c;
    this._x83 = b;
    if (a <= 9) {
        this._xc3 = 0
    } else {
        if (a >= 10 && a <= 26) {
            this._xc3 = 1
        } else {
            if (a >= 27 && a <= 40) {
                this._xc3 = 2
            }
        }
    }
    this._xab = function (f) {
        var k = 0;
        if (f < this._x5a + 1) {
            var m = 0;
            for (var e = 0; e < f; e++) {
                m += (1 << e)
            }
            m <<= (this._x5a - f + 1);
            k = (this.blocks[this._x79] & m) >> (this._x5a - f + 1);
            this._x5a -= f;
            return k
        } else {
            if (f < this._x5a + 1 + 8) {
                var j = 0;
                for (var e = 0; e < this._x5a + 1; e++) {
                    j += (1 << e)
                }
                k = (this.blocks[this._x79] & j) << (f - (this._x5a + 1));
                this._x79++;
                k += ((this.blocks[this._x79]) >> (8 - (f - (this._x5a + 1))));
                this._x5a = this._x5a - f % 8;
                if (this._x5a < 0) {
                    this._x5a = 8 + this._x5a
                }
                return k
            } else {
                if (f < this._x5a + 1 + 16) {
                    var j = 0;
                    var h = 0;
                    for (var e = 0; e < this._x5a + 1; e++) {
                        j += (1 << e)
                    }
                    var g = (this.blocks[this._x79] & j) << (f - (this._x5a + 1));
                    this._x79++;
                    var d = this.blocks[this._x79] << (f - (this._x5a + 1 + 8));
                    this._x79++;
                    for (var e = 0; e < f - (this._x5a + 1 + 8); e++) {
                        h += (1 << e)
                    }
                    h <<= 8 - (f - (this._x5a + 1 + 8));
                    var l = (this.blocks[this._x79] & h) >> (8 - (f - (this._x5a + 1 + 8)));
                    k = g + d + l;
                    this._x5a = this._x5a - (f - 8) % 8;
                    if (this._x5a < 0) {
                        this._x5a = 8 + this._x5a
                    }
                    return k
                } else {
                    return 0
                }
            }
        }
    };
    this._xc4 = function () {
        if ((this._x79 > this.blocks.length - this._x83 - 2)) {
            return 0
        } else {
            return this._xab(4)
        }
    };
    this._xc1 = function (d) {
        var e = 0;
        while (true) {
            if ((d >> e) == 1) {
                break
            }
            e++
        }
        return this._xab(qrcode._x84[this._xc3][e])
    };
    this._xbe = function (h) {
        var f = h;
        var g = 0;
        var j = "";
        var d = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":");
        do {
            if (f > 1) {
                g = this._xab(11);
                var i = Math.floor(g / 45);
                var e = g % 45;
                j += d[i];
                j += d[e];
                f -= 2
            } else {
                if (f == 1) {
                    g = this._xab(6);
                    j += d[g];
                    f -= 1
                }
            }
        } while (f > 0);
        return j
    };
    this._xbf = function (f) {
        var d = f;
        var e = 0;
        var g = "";
        do {
            if (d >= 3) {
                e = this._xab(10);
                if (e < 100) {
                    g += "0"
                }
                if (e < 10) {
                    g += "0"
                }
                d -= 3
            } else {
                if (d == 2) {
                    e = this._xab(7);
                    if (e < 10) {
                        g += "0"
                    }
                    d -= 2
                } else {
                    if (d == 1) {
                        e = this._xab(4);
                        d -= 1
                    }
                }
            }
            g += e
        } while (d > 0);
        return g
    };
    this._xc0 = function (g) {
        var e = g;
        var f = 0;
        var d = new Array();
        do {
            f = this._xab(8);
            d.push(f);
            e--
        } while (e > 0);
        return d
    };
    this._xc7 = function (j) {
        var g = j;
        var i = 0;
        var h = "";
        do {
            i = _xab(13);
            var e = i % 192;
            var f = i / 192;
            var k = (f << 8) + e;
            var d = 0;
            if (k + 33088 <= 40956) {
                d = k + 33088
            } else {
                d = k + 49472
            }
            h += String.fromCharCode(d);
            g--
        } while (g > 0);
        return h
    };
    this.__defineGetter__("DataByte", function () {
        var g = new Array();
        var e = 1;
        var f = 2;
        var d = 4;
        var n = 8;
        do {
            var k = this._xc4();
            if (k == 0) {
                if (g.length > 0) {
                    break
                } else {
                    throw "Empty data block"
                }
            }
            if (k != e && k != f && k != d && k != n) {
                throw "Invalid mode: " + k + " in (block:" + this._x79 + " bit:" + this._x5a + ")"
            }
            _xc2 = this._xc1(k);
            if (_xc2 < 1) {
                throw "Invalid data length: " + _xc2
            }
            switch (k) {
            case e:
                var l = this._xbf(_xc2);
                var i = new Array(l.length);
                for (var h = 0; h < l.length; h++) {
                    i[h] = l.charCodeAt(h)
                }
                g.push(i);
                break;
            case f:
                var l = this._xbe(_xc2);
                var i = new Array(l.length);
                for (var h = 0; h < l.length; h++) {
                    i[h] = l.charCodeAt(h)
                }
                g.push(i);
                break;
            case d:
                var m = this._xc0(_xc2);
                g.push(m);
                break;
            case n:
                var l = this._xc7(_xc2);
                g.push(l);
                break
            }
        } while (true);
        return g
    })
};