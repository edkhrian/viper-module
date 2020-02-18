import SpriteKit

class {{ module.name }}ModuleConfigurator {
    static func createModule(_ onConfig: (({{ module.name }}ModuleInput) -> {{ module.name }}ModuleOutput?)? = nil) -> SKScene {
        let view = {{ module.name }}Scene()
        let presenter = {{ module.name }}Presenter()
        let interactor = {{ module.name }}Interactor()
        let router = {{ module.name }}Router()

        view.output = presenter
        presenter.view = view
        presenter.router = router
        presenter.interactor = interactor
        router.scene = view
        interactor.output = presenter
        presenter.moduleOutput = onConfig?(presenter)

        return view
    }
}
