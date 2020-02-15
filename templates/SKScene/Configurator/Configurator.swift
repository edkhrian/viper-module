import SpriteKit

class $MODULE$Configurator {
    static func createModule(_ onConfig: (($MODULE$ModuleInput) -> $MODULE$ModuleOutput?)? = nil) -> SKScene {
        let view = $MODULE$Scene()
        let presenter = $MODULE$Presenter()
        let interactor = $MODULE$Interactor()
        let router = $MODULE$Router()

        view.output = presenter
        presenter.view = view
        presenter.router = router
        presenter.interactor = interactor
        router.viewController = view
        interactor.output = presenter
        presenter.moduleOutput = onConfig?(presenter)

        return view
    }
}
