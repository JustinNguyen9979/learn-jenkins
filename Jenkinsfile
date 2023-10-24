pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/JustinNguyen9979/learn-jenkins.git'
            }
        }
        stage('Build') {
            steps {
                withDockerRegistry(credentialsId: 'Docker-Hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t 997909799/learn-jenkins:V1.01 .'
                    sh 'docker push 997909799/learn-jenkins:V1.01'
                }
            }

        }
    }
}
