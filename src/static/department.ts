import MD from "../assets/images/department/multimedia-department.png"
import SD from "../assets/images/department/software-depertment.png"
import HD from "../assets/images/department/hardware-department.png"
import OD from "../assets/images/department/organization-department.png"

enum DepartmentEnums {
    Multimedia = "multimedia-department",
    Software = "software-depertment",
    Hardware = "hardware-department",
    Organization = "organization-department",
}

class Factory {
    static Multimedia?: Multimedia
    static Software?: Software
    static Hardware?: Hardware
    static Organization?: Organization
    static getDepartmentByFullName(fullName: string): Department {
        switch (fullName) {
            case DepartmentEnums.Multimedia:
                if (!Factory.Multimedia) {
                    Factory.Multimedia = new Multimedia()
                }
                return Factory.Multimedia!
                break;
            case DepartmentEnums.Software:
                if (!Factory.Software) {
                    Factory.Software = new Software()
                }
                return Factory.Software!
                break;
            case DepartmentEnums.Hardware:
                if (!Factory.Hardware) {
                    Factory.Hardware = new Hardware()
                }
                return Factory.Hardware!
                break;
            default:
                if (!Factory.Organization) {
                    Factory.Organization = new Organization()
                }
                return Factory.Organization!
                break;
        }
    }

    static getDepartmentByLearningDirection(learningDirection: string): Department {
        if (Factory.Multimedia!.learningDirection.find(self => self === learningDirection)) {
            return Factory.Multimedia!
        }
        if (Factory.Software!.learningDirection.find(self => self === learningDirection)) {
            return Factory.Software!
        }
        if (Factory.Hardware!.learningDirection.find(self => self === learningDirection)) {
            return Factory.Hardware!
        }
        return Factory.Organization!
    }
}

interface Department {
    fullName: string
    logo: string
    learningDirection: Array<string>
}

class Multimedia implements Department {
    fullName = "multimedia-department"
    logo = MD
    learningDirection = [
        "网站开发", "UI设计", "视频剪辑", "小程序"
    ]
}

class Software implements Department {
    fullName = "software-depertment"
    logo = SD
    learningDirection = [
        "游戏制作", "安卓开发", "机器学习"
    ]
}

class Hardware implements Department {
    fullName = "hardware-department"
    logo = HD
    learningDirection = [
        "硬件开发"
    ]
}

class Organization implements Department {
    fullName = "organization-department"
    logo = OD
    learningDirection = [
    ]
}

export const Department = {
    MD: Factory.getDepartmentByFullName(DepartmentEnums.Multimedia),
    SD: Factory.getDepartmentByFullName(DepartmentEnums.Software),
    HD: Factory.getDepartmentByFullName(DepartmentEnums.Hardware),
    OD: Factory.getDepartmentByFullName(DepartmentEnums.Organization),
    getByFullName: Factory.getDepartmentByFullName,
    getByLearningDirection: Factory.getDepartmentByLearningDirection
}