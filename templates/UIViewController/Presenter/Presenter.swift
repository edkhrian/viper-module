import Foundation

class {{ module.name }}Presenter: {{ module.name }}ViewOutput, {{ module.name }}InteractorOutput, {{ module.name }}ModuleInput {
    weak var view: {{ module.name }}ViewInput!
    var router: {{ module.name }}RouterInput!
    var interactor: {{ module.name }}InteractorInput!
    var moduleOutput: {{ module.name }}ModuleOutput?

    // MARK: - {{ module.name }}ViewOutput

    func viewIsReady() {
        view.setupInitialState()
    }

    // MARK: - {{ module.name }}InteractorOutput

    // MARK: - {{ module.name }}ModuleInput
}
