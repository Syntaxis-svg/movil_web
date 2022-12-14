var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ZBarOriginal = /** @class */ (function (_super) {
    __extends(ZBarOriginal, _super);
    function ZBarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZBarOriginal.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    ZBarOriginal.pluginName = "ZBar";
    ZBarOriginal.plugin = "cordova-plugin-cszbar";
    ZBarOriginal.pluginRef = "cloudSky.zBar";
    ZBarOriginal.repo = "https://github.com/tjwoon/csZBar";
    ZBarOriginal.platforms = ["Android", "iOS"];
    return ZBarOriginal;
}(IonicNativePlugin));
var ZBar = new ZBarOriginal();
export { ZBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3piYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkU5Qyx3QkFBaUI7Ozs7SUFPekMsbUJBQUksYUFBQyxPQUFvQjs7Ozs7O2VBckYzQjtFQThFMEIsaUJBQWlCO1NBQTlCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBaQmFyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHRpdGxlIHRleHQgKEFuZHJvaWQgb25seSkuXG4gICAqIERlZmF1bHQ6IFwiU2NhbiBRUiBDb2RlXCJcbiAgICovXG4gIHRleHRfdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgaW5zdHJ1Y3Rpb24gdGV4dCAoQW5kcm9pZCBvbmx5KS5cbiAgICogRGVmYXVsdDogXCJQbGVhc2UgcG9pbnQgeW91ciBjYW1lcmEgYXQgdGhlIFFSIGNvZGUuXCJcbiAgICovXG4gIHRleHRfaW5zdHJ1Y3Rpb25zPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBkZWZpbmluZyB0aGUgYWN0aXZlIGNhbWVyYSB3aGVuIG9wZW5pbmcgdGhlIHNjYW5uZXIuXG4gICAqIFBvc3NpYmxlIHZhbHVlczogXCJmcm9udFwiLCBcImJhY2tcIlxuICAgKiBEZWZhdWx0OiBcImJhY2tcIlxuICAgKi9cbiAgY2FtZXJhPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBkZWZpbmluZyB0aGUgc3RhdGUgb2YgdGhlIGZsYXNoLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6IFwib25cIiwgXCJvZmZcIiwgXCJhdXRvXCJcbiAgICogRGVmYXVsdDogXCJhdXRvXCJcbiAgICovXG4gIGZsYXNoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdG8gc2hvdyBvciBoaWRlIGEgbGluZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzY2FubmVyLlxuICAgKiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBkcmF3U2lnaHQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIFpCYXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIFpCYXIgU2Nhbm5lciBQbHVnaW4gYWxsb3dzIHlvdSB0byBzY2FuIDJkIGJhcmNvZGVzLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY3N6YmFyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW3pCYXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS90andvb24vY3NaQmFyKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFpCYXIsIFpCYXJPcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS96YmFyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB6YmFyOiBaQmFyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgb3B0aW9uczogWkJhck9wdGlvbnMgPSB7XG4gKiAgICAgICBmbGFzaDogJ29mZicsXG4gKiAgICAgICBkcmF3U2lnaHQ6IGZhbHNlXG4gKiAgICAgfVxuICpcbiAqIHRoaXMuemJhci5zY2FuKG9wdGlvbnMpXG4gKiAgICAudGhlbihyZXN1bHQgPT4ge1xuICogICAgICAgY29uc29sZS5sb2cocmVzdWx0KTsgLy8gU2Nhbm5lZCBjb2RlXG4gKiAgICB9KVxuICogICAgLmNhdGNoKGVycm9yID0+IHtcbiAqICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy8gRXJyb3IgbWVzc2FnZVxuICogICAgfSk7XG4gKlxuICogYGBgXG4gKlxuICogQGludGVyZmFjZXNcbiAqIFpCYXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWkJhcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNzemJhcicsXG4gIHBsdWdpblJlZjogJ2Nsb3VkU2t5LnpCYXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Rqd29vbi9jc1pCYXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWkJhciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gdGhlIHNjYW5uZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgeyBaQmFyT3B0aW9ucyB9IFNjYW4gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHNjYW5uZWQgc3RyaW5nLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNjYW4ob3B0aW9uczogWkJhck9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19