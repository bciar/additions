@Library('common@fix-slack') _

wrap.pipeline {
  wrap.slave {
    stage('Build') {
      milestone()
      checkoutScm()

      def image = docker.build("${jobName()}:${env.GIT_COMMIT}", '--pull .')
      pushImage(image, [env.GIT_COMMIT])
    }

    stage('Deploy') {
      milestone()
      deployImage(environment: 'production', cluster: env.PROD_CLUSTER)
    }
  }
}