// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "BlockApps",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "BlockApps",
            targets: ["BlockAppsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "BlockAppsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/BlockAppsPlugin"),
        .testTarget(
            name: "BlockAppsPluginTests",
            dependencies: ["BlockAppsPlugin"],
            path: "ios/Tests/BlockAppsPluginTests")
    ]
)