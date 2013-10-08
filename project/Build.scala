import sbt._
import Keys._
import play.Project._
import com.typesafe.sbteclipse.plugin.EclipsePlugin.EclipseKeys

object ApplicationBuild extends Build {

  val appName = "kolaBudy"
  val appVersion = "1.0-hackathon"

  val appDependencies = Seq(
    jdbc,
    "com.typesafe.slick" %% "slick" % "1.0.1",
    "org.slf4j" % "slf4j-api" % "1.7.3",
    "com.h2database" % "h2" % "1.3.166",
    "postgresql" % "postgresql" % "9.1-901.jdbc4",
    "com.chuusai" %% "shapeless" % "1.2.4")

  val main = play.Project(appName, appVersion, appDependencies).settings(defaultScalaSettings: _*).settings(
    resolvers += "Sonatype OSS Releases" at "http://oss.sonatype.org/content/repositories/releases/",
    resolvers += "Sonatype OSS Snapshots" at "http://oss.sonatype.org/content/repositories/snapshots/",
    EclipseKeys.withSource := true)

}
