function deactivateSelectedRewards(selectedControl, selectedIds) {
    var formContext = selectedControl;
    if (!selectedIds || selectedIds.length === 0) {
        return;
    }
    var entity  = {};
    entity ["statecode"] = 1; // Inactive
    entity ["statuscode"] = 847360001; // Refused
    selectedIds.forEach((id) =>
        Xrm.WebApi.updateRecord("cr452_markhipenka_reward", id, entity ).then(
            function success(result) {
                console.log("The reward has been successfully deactivated:", id);
                currentFormContext.data.refresh();
            },
            function onError(error) {
                Xrm.Navigation.openAlertDialog({ text: error.message });
                console.error("Error when deactivating a reward:", error.message);
            }
        )
    );
} 
