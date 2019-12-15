export class ArrayHelper {
    GetNestedChildren(arr, parent) {
        var out = [];
        for (var i in arr) {
            if (arr[i].ModuleId == parent) {
                var children = this.GetNestedChildren(arr, arr[i].Id);

                if (children.length) {
                    arr[i].children = children;
                }
                out.push(arr[i]);
            }
        }
        return out;
    }

    TreeToFlatArray(arr, parent) {
        var out = [];
        for (var i in arr) {
            if (arr[i].ModuleId == parent) {
                if (arr[i].children) {
                if (arr[i].children.length) { // If it is a parent node, 
                    var children = this.TreeToFlatArray(arr[i].children, arr[i].Id);    
                    out.push(arr[i]);
                    children.forEach( (c) => out.push(c));
                }
            }
            else
            {
                out.push(arr[i]);
            }
            }
        }
        return out;
    }
}