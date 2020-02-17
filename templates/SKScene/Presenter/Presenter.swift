import Foundation

class {{ module.name }}Presenter {
    weak var view: {{ module.name }}ViewInput!
    var router: {{ module.name }}RouterInput!
    var interactor: {{ module.name }}InteractorInput!
    var moduleOutput: {{ module.name }}ModuleOutput?

    func viewIsReady() {

    }
}
