import MD from "../assets/images/department/multimedia-department.png"
import SD from "../assets/images/department/software-depertment.png"
import HD from "../assets/images/department/hardware-department.png"
import OD from "../assets/images/department/organization-department.png"

export class MultimediaDepartment {
    static FullName = "multimedia-department"
    static Logo = MD
    static LearningDirection = [
        "网站开发", "UI设计", "视频剪辑", "小程序"
    ]
}

export class SoftwareDepertment {
    static FullName = "software-depertment"
    static Logo = SD
    static LearningDirection = [
        "游戏制作", "安卓开发", "机器学习"
    ]
}

export class HardwareDepartment {
    static FullName = "hardware-department"
    static Logo = HD
    static LearningDirection = [
        "硬件开发"
    ]
}

export class OrganizationDepartment {
    static FullName = "organization-department"
    static Logo = OD
    static LearningDirection = [
    ]
}


function getDepartmentByFullName(fullName: string): any {
    switch (fullName) {
        case MultimediaDepartment.FullName:
            return MultimediaDepartment
            break;
        case SoftwareDepertment.FullName:
            return SoftwareDepertment
            break;
        case HardwareDepartment.FullName:
            return HardwareDepartment
            break;
        case OrganizationDepartment.FullName:
            return OrganizationDepartment
            break;
        default:
            return null
            break;
    }
}

function getDepartmentByLearningDirection(learningDirection: string): any {
    if (MultimediaDepartment.LearningDirection.find(self => self === learningDirection)) {
        return MultimediaDepartment
    }
    if (SoftwareDepertment.LearningDirection.find(self => self === learningDirection)) {
        return MultimediaDepartment
    }
    if (HardwareDepartment.LearningDirection.find(self => self === learningDirection)) {
        return MultimediaDepartment
    }
    if (OrganizationDepartment.LearningDirection.find(self => self === learningDirection)) {
        return MultimediaDepartment
    }
}


export const Department = {
    MD: MultimediaDepartment,
    SD: SoftwareDepertment,
    HD: HardwareDepartment,
    OD: OrganizationDepartment,
    getByFullName: getDepartmentByFullName,
    getByLearningDirection: getDepartmentByLearningDirection
}