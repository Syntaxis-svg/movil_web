'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var ZBar = /** @class */ (function (_super) {
    tslib.__extends(ZBar, _super);
    function ZBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZBar.prototype.scan = function (options) { return core.cordova(this, "scan", {}, arguments); };
    ZBar.pluginName = "ZBar";
    ZBar.plugin = "cordova-plugin-cszbar";
    ZBar.pluginRef = "cloudSky.zBar";
    ZBar.repo = "https://github.com/tjwoon/csZBar";
    ZBar.platforms = ["Android", "iOS"];
    ZBar.decorators = [
        { type: core$1.Injectable }
    ];
    return ZBar;
}(core.IonicNativePlugin));

exports.ZBar = ZBar;
