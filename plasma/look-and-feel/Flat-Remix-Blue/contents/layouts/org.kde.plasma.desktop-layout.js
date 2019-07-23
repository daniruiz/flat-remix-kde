var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "config": {
                "/General": {
                    "ToolBoxButtonState": "bottom"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "applets": [
                {
                    "plugin": "org.kde.plasma.kickerdash"
                },
                {
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "height": 1.5555555555555556,
            "location": "top",
            "minimumLength": 9999,
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
