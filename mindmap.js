function MindMap($scope) {
  $scope.tree = {'title': 'Root'};
  $scope.input = {'title': ''};

  $scope.add_child = function(parent_node) {
    var child_node = {'title': $scope.input.title, 'parent': parent_node};

    if (parent_node.children) {
      parent_node.children.push(child_node);
    }
    else {
      parent_node.children = [child_node];
    }

    $scope.input.title = '';
  };

  $scope.delete_child = function(child_node_to_delete) {
    var parent = child_node_to_delete.parent;
    for(var i=0; i<parent.children.length; i++) {
      var child_node = parent.children[i];
      if (child_node == child_node_to_delete) {
        parent.children.splice(i,1);
        break;
      }
    } 
  };
}
