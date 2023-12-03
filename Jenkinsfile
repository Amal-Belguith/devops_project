def dockerImage
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
                    dockerImage = docker.build("amalbelguith0/dockerimg:${env.BUILD_ID}")
                }
            }
        }

        stage('Push Docker Image to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'registry-credentials') {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Deploy to Docker') {
            steps {
                script {
                    sh "docker run -p 8084:80 amalbelguith0/dockerimg:${env.BUILD_ID}"

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
