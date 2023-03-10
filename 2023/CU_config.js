var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "gsCol": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "gsCol": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023caph",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "gsCol": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "gsCol": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "gsCol": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "gsCol": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "gsCol": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "gsCol": "Auto Scoring"
      "code": "asg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Crossed Cable",
      "gsCol": "Crossed Cable",
      "code": "acc",
      "type": "bool"
    },
    { "name": "Crossed Charging Station",
      "gsCol": "Crossed Charging Station",
      "code": "acs",
      "type": "bool"
    },
    { "name": "Mobility?",
      "gsCol": "Mobility",
      "code": "am",
      "type": "bool"
    },
    { "name": "Docked",
      "gsCol": "Docked",
      "code": "ad",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "tct",
      "type": "cycle"
    },
    { "name": "Grid Scoring",
      "gsCol": "Grid Scoring",
      "code": "tsg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Feeder Count<br>(Fed another bot)",
      "gsCol": "Feeder Count",
      "code": "tfc",
      "type": "counter",
      "cycleTimer": "tct"
    },
    { "name": "Was Fed<br>Game Pieces",
      "gsCol": "Fed Count",
      "code": "wf",
      "type": "bool"
    },
    { "name": "Was Defended",
      "gsCol": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Who Defended this bot",
      "gsCol": "Who Defended this bot",
      "code": "who",
      "type": "text"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "gsCol": "Links",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "Floor Pickup",
      "gsCol": "Floor Pickup",
      "code": "fpu",
      "type": "radio",
      "choices": {
        "o": "Cones<br>",
        "u": "Cubes<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "gsCol": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "gsCol": "Alliance bots docked/engaged",
      "code": "dn",
      "type": "counter"
    },
    { "name": "Links Scored",
      "gsCol": "Links Scored",
      "code": "ls",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "gsCol": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "gsCol": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Swerve drive?",
      "gsCol": "Swerve drive?"
      "code": "sd",
      "type": "bool"
    },
    { "name": "Speed Rating",
      "gsCol": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "gsCol": "Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "gsCol": "Tippy",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Cones (>2)",
      "gsCol": "Dropped Cones >2",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "gsCol": "Good alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "gsCol": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
