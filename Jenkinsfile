pipeline {
  
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        

        stage('Build Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build("amalbelguith0/dockerimg:${env.BUILD_ID}")
                }
            }
        }

        stage('Push Docker Image to DockerHub') {
            steps {
                script {
                    withDockerRegistry([credentialsId: 'registry-credentials', url: 'https://registry.hub.docker.com']) {
                        // Your Docker push commands here
                        sh 'docker push amalbelguith0/dockerimg:latest'
                    }
                }
            }
        }

        stage('Deploy to Docker') {
            steps {
                script {
                    sh 'docker run -p 8080:80 amalbelguith0/dockerimg:${env.BUILD_ID}'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
