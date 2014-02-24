function new_recognitionitemid_onchange() {
    //Variable Definitions

    var RI_Name = new Array;
    RI_Name = crmForm.all.new_recognitionitemid.DataValue;

    var RI_Stan = crmForm.all.new_standing;

    //If Area recognition item is Selected

    if (RI_Name != null) {

        //Ministry Team Name
        if (RI_Stan.DataValue == null) {
            var RIR_Name = RI_Name[0].name + " - Please select a standing";
        }

        if (RI_Stan.DataValue != null) {
            var RIR_Name = RI_Name[0].name + " - " + RI_Stan.SelectedText;
        }

        if (RI_Name[0].name == "Regional Recognition Item") {
            crmForm.all.new_regionaldescription.Disabled = false;
        }
        else {
            crmForm.all.new_regionaldescription.Disabled = true;
        }

    }

    //If recognition item is deselected

    if (RI_Name == null) {
        crmForm.all.new_regionaldescription.Disabled = true;
        crmForm.all.new_regionaldescription.DataValue = null;

        //standing
        if (RI_Stan.DataValue == null) {
            var RIR_Name = "Please choose an recognition item" + " and " + "Please select a standing";
        }

        if (RI_Stan.DataValue != null) {
            var RIR_Name = "Please choose an recognition item" + " - " + RI_Stan.SelectedText;
        }

    }

    //Change the NAME of the field
    crmForm.all.new_name.DataValue = RIR_Name;
    crmForm.all.new_name.ForceSubmit = true;
}
function new_standing_onchange() {
    //Variable Definitions

    var RI_Name = new Array;
    RI_Name = crmForm.all.new_recognitionitemid.DataValue;

    var RI_Stan = crmForm.all.new_standing;

    //If Area recognition item is Selected

    if (RI_Name != null) {

        //Ministry Team Name
        if (RI_Stan.DataValue == null) {
            var RIR_Name = RI_Name[0].name + " - Please select a standing";
            crmForm.all.new_datemailed.DataValue = null;
        }

        if (RI_Stan.DataValue != null) {
            var RIR_Name = RI_Name[0].name + " - " + RI_Stan.SelectedText;
            crmForm.all.new_datemailed.DataValue = new Date();
        }
    }

    //If recognition item is deselected

    if (RI_Name == null) {
        //standing
        if (RI_Stan.DataValue == null) {
            var RIR_Name = "Please choose an recognition item" + " and " + "Please select a standing";
            crmForm.all.new_datemailed.DataValue = null;
        }

        if (RI_Stan.DataValue != null) {
            var RIR_Name = "Please choose an recognition item" + " - " + RI_Stan.SelectedText;
            crmForm.all.new_datemailed.DataValue = new Date();
        }
    }

    //Change the NAME of the field
    crmForm.all.new_name.DataValue = RIR_Name;
    crmForm.all.new_name.ForceSubmit = true;
}
function new_regionaldescription_onchange() {
    crmForm.all.new_regionaldescription.ForceSubmit = true;
}
