var class_mode_change = function () {

    var Me; this.initialize = function () { Me = c_mode_change; }

    this.exe = function ($this) {

        if ($this.css("text-align") == "right") {

            $this.css("text-align", "left");

            if (general_data.monitor_mode == "desktop") {
                $("#div_mode_name").text("White Mode");
            } else {
                $("#div_mode_name").text("White");
            }
        } else if ($this.css("text-align") == "left") {

            $this.css("text-align", "right");

            if (general_data.monitor_mode == "desktop") {
                $("#div_mode_name").text("Dark Mode");
            } else {
                $("#div_mode_name").text("Dark");
            }
        }
    }

}

var c_mode_change = new class_mode_change(); c_mode_change.initialize();